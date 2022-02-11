import router from "next/router";
import { capitalize } from "underscore.string";
import { PostTypesEnum, useCreatePostMutation } from "../../../../generated/graphql";
import CreatePageFormLogic, { CreatePageFormModel } from "./CreatePageFormLogic";

const CreatePageFormApollo = () => {

    const [insert_posts_one] = useCreatePostMutation()


    const handleSubmit = async (data: CreatePageFormModel) => {
        const {
            title,
            slug,
            //state,
            //body,
        } = data

        try {
            const { data } = await insert_posts_one({
                variables: {
                    object: {
                        title,
                        slug,
                        //body,
                        //state: PageStatesEnum[capitalize(state)],
                        type: PostTypesEnum.Page
                    }
                }
            });

            router.push(`/pages/edit/${data.insert_posts_one.id}`)

        } catch (error) {
            console.log(error)
        }
    };

    const defaultValues = {
        title: "",
        slug: "",
        body: "",
        state: ""
    };

    return (
        <CreatePageFormLogic
            defaultValues={defaultValues}
            onSubmit={handleSubmit}
        />
    );
};

export default CreatePageFormApollo;