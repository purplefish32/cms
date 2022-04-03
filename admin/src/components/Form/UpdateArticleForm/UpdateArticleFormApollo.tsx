import { capitalize } from "underscore.string";
import {
  ArticleStatesEnum,
  useArticleQuery,
  useUpdateArticleMutation,
} from "../../../../generated/graphql";
import UpdatePostFormLogic, {
  UpdateArticleFormModel,
} from "./UpdateArticleFormLogic";
import React from "react";

interface Props {
  postId: string;
}

const UpdateArticleFormApollo = ({ postId }: Props) => {
  const { data, loading } = useArticleQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      uuid: postId,
    },
  });

  const [updateArticlesOne] = useUpdateArticleMutation();

  const handleSubmit = async (data: UpdateArticleFormModel) => {
    const { title, slug, state, body, excerpt } = data;

    try {
      await updateArticlesOne({
        variables: {
          articles_pk_columns: {
            post_id: postId,
          },
          articles_set: {
            state: ArticleStatesEnum[capitalize(state)],
            body,
            excerpt,
          },
          posts_pk_columns: {
            id: postId,
          },
          posts_set: {
            title,
            slug,
          },
        },
      });
    } catch (error) {
      console.log(error.stack);
      throw new Error("Could not update article");
    }
  };

  // return early if initial form data isn't loaded
  if (loading) return <div>Loading...</div>;

  const defaultValues = {
    title: data?.articles_by_pk?.post?.title ?? "",
    slug: data?.articles_by_pk?.post?.slug ?? "",
    body: data?.articles_by_pk?.body ?? "",
    state: data?.articles_by_pk?.state ?? "",
    excerpt: data?.articles_by_pk?.excerpt ?? "",
  };

  return (
    <UpdatePostFormLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
};

export default UpdateArticleFormApollo;
