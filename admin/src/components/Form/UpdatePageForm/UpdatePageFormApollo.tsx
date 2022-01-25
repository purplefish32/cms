import { capitalize } from "underscore.string";
import { PostStatesEnum, PostTypesEnum, usePostQuery, useUpdatePostMutation } from "../../../../generated/graphql";
import UpdatePageFormLogic, { UpdatePageFormModel } from "./UpdatePageFormLogic";

interface Props {
    postId: string;
}

const UpdatePageFormApollo = ({ postId }: Props) => {
    const {
        data,
        loading,
    } = usePostQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            uuid: postId
        }
    });

    const [update_posts_one] = useUpdatePostMutation()


    const handleSubmit = async (data: UpdatePageFormModel) => {
        const {
            title,
            slug,
            state,
            body,
        } = data

        try {
            await update_posts_one({
                variables: {
                    pk_columns: {
                        id: postId
                    },
                    _set: {
                        title,
                        slug,
                        state: PostStatesEnum[
                            capitalize(state)
                        ],
                        body,
                        type: PostTypesEnum.Page
                    }
                }
            });
        } catch (error) {
            console.log(error)
        }
    };

    // return early if initial form data isn't loaded
    if (loading) return <div>Loading...</div>;

    const defaultValues = {
        title: data?.posts_by_pk?.title ?? "",
        slug: data?.posts_by_pk?.slug ?? "",
        body: data?.posts_by_pk?.body ?? "",
        state: data?.posts_by_pk?.state ?? "",
    };

    return (
        <UpdatePageFormLogic
            defaultValues={defaultValues}
            onSubmit={handleSubmit}
        />
    );
};

export default UpdatePageFormApollo;