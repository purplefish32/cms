import router from "next/router";
import React from "react";
import { capitalize } from "underscore.string";
import {
  PageStatesEnum,
  PostTypesEnum,
  useCreatePageMutation,
} from "../../../../generated/graphql";
import CreatePageFormLogic, {
  CreatePageFormModel,
} from "./CreatePageFormLogic";

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
            state:
              PageStatesEnum[capitalize(state) as keyof typeof PageStatesEnum],
          },
        },
      });

      router.push(`/pages/edit/${data?.insert_pages_one?.id}`);
    } catch (error) {
      console.log(error);
      throw new Error("Could not create page");
    }
  };

  return <CreatePageFormLogic onSubmit={handleSubmit} />;
};

export default CreatePageFormApollo;
