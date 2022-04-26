import router from "next/router";
import React from "react";
import { capitalize } from "underscore.string";
import {
  ArticleStatesEnum,
  PostTypesEnum,
  useCreateArticleMutation
} from "../../../../generated/graphql";
import CreateArticleFormLogic, {
  CreateArticleFormModel
} from "./CreateArticleFormLogic";

const CreateArticleFormApollo = () => {
  const [insertArticlesOne] = useCreateArticleMutation();

  const handleSubmit = async (data: CreateArticleFormModel) => {
    const { title, slug, state, body, excerpt } = data;

    try {
      const { data } = await insertArticlesOne({
        variables: {
          object: {
            post: {
              data: {
                title,
                slug,
                type: PostTypesEnum.Article,
              },
            },
            body,
            excerpt,
            state: ArticleStatesEnum[capitalize(state)],
          },
        },
      });

      router.push(`/articles/edit/${data.insert_articles_one.post_id}`);
    } catch (error) {
      console.log(error.stack);
      throw new Error("Could not create article");
    }
  };

  const defaultValues = {
    title: "",
    slug: "",
    body: "",
    state: "",
    excerpt: "",
  };

  return (
    <CreateArticleFormLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateArticleFormApollo;
