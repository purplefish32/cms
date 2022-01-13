import router from "next/router";
import { capitalize } from "underscore.string";
import { PostStatesEnum, PostTypesEnum, useCreatePostMutation } from "../../../../generated/graphql";
import CreatePostFormLogic, { CreatePostFormModel } from "./CreatePostFormLogic";

const CreatePostFormApollo = () => {

    const [insert_posts_one] = useCreatePostMutation()


    const handleSubmit = async (data: CreatePostFormModel) => {
        const {
            title,
            slug,
            state,
            body,
            excerpt
        } = data

        try {
            const { data } = await insert_posts_one({
                variables: {
                    object: {
                        title,
                        slug,
                        body,
                        excerpt,
                        state: PostStatesEnum[capitalize(state)],
                        type: PostTypesEnum.Post
                    }
                }
            });

            router.push(`/posts/edit/${data.insert_posts_one.id}`)

        } catch (error) {
            console.log(error)
        }
    };

    const defaultValues = {
        title: "",
        slug: "",
        body: "",
        state: "",
        excerpt: ""
    };

    return (
        <CreatePostFormLogic
            defaultValues={defaultValues}
            onSubmit={handleSubmit}
        />
    );
};

export default CreatePostFormApollo;