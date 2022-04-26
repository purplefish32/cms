import React from "react";
import { capitalize } from "underscore.string";
import {
  PageStatesEnum,
  usePageQuery,
  useUpdatePageMutation,
} from "../../../../generated/graphql";
import UpdatePageFormLogic, {
  UpdatePageFormModel,
} from "./UpdatePageFormLogic";

interface Props {
  postId: string;
}

const UpdatePageFormApollo = ({ postId }: Props) => {
  const { data, loading } = usePageQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      uuid: postId,
    },
  });

  const [updatePagesOne] = useUpdatePageMutation();

  const handleSubmit = async (data: UpdatePageFormModel): Promise<void> => {
    const { title, slug, state, body } = data;

    try {
      await updatePagesOne({
        variables: {
          pages_pk_columns: {
            post_id: postId,
          },
          pages_set: {
            state: PageStatesEnum[capitalize(state)],
            body,
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
      throw new Error("Could not update page");
    }
  };

  // return early if initial form data isn't loaded
  if (loading) return <div>Loading...</div>;

  const defaultValues = {
    title: data?.pages_by_pk?.post?.title ?? "",
    slug: data?.pages_by_pk?.post?.slug ?? "",
    body: data?.pages_by_pk?.body ?? "",
    state: data?.pages_by_pk?.state ?? "",
  };

  return (
    <UpdatePageFormLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
};

export default UpdatePageFormApollo;
