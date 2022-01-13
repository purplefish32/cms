import { capitalize } from "underscore.string";
import { PostStatesEnum, PostTypesEnum, usePostQuery, useUpdatePostMutation } from "../../../generated/graphql";
import UpdatePostFormLogic, { UpdatePostFormModel } from "./UpdatePostFormLogic";

interface Props {
    postId: string;
}

const UpdatePostFormApollo = ({ postId }: Props) => {
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


    const handleSubmit = async (data: UpdatePostFormModel) => {
        const {
            title,
            slug,
            state,
            body,
            excerpt
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
                        excerpt,
                        type: PostTypesEnum.Post
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
        excerpt: data?.posts_by_pk?.excerpt ?? ""
    };

    return (
        <UpdatePostFormLogic
            defaultValues={defaultValues}
            onSubmit={handleSubmit}
        />
    );
};

export default UpdatePostFormApollo;