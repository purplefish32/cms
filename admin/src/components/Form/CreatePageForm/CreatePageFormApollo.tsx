import router from "next/router";
import { capitalize } from "underscore.string";
import {
  PageStatesEnum,
  PostTypesEnum,
  useCreatePageMutation,
} from "../../../../generated/graphql";
import CreatePageFormLogic, {
  CreatePageFormModel,
} from "./CreatePageFormLogic";
import React from "react";

const CreatePageFormApollo = () => {
  const [insertPagesOne] = useCreatePageMutation();

  const handleSubmit = async (data: CreatePageFormModel) => {
    const { title, slug, state, body } = data;

    try {
      const { data } = await insertPagesOne({
        variables: {
          object: {
            post: {
              data: {
                title,
                slug,
                type: PostTypesEnum.Page,
              },
            },
            body,
            state: PageStatesEnum[capitalize(state)],
          },
        },
      });

      router.push(`/pages/edit/${data.insert_pages_one.id}`);
    } catch (error) {
      console.log(error.stack);
      throw new Error("Could not create page");
    }
  };

  const defaultValues = {
    title: "",
    slug: "",
    body: "",
    state: "",
  };

  return (
    <CreatePageFormLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
};

export default CreatePageFormApollo;
