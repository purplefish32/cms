/* eslint-disable require-jsdoc */
import { ActionIcon } from "@mantine/core";
import React from "react";
import { Trash } from "tabler-icons-react";
import {
  namedOperations,
  useDeletePostMutation,
} from "../../../generated/graphql";
interface Props {
  postId: string;
}

const ArticleDeleteButton = ({ postId }: Props) => {
  const [postsDelete, { loading }] = useDeletePostMutation({
    refetchQueries: [
      namedOperations.Query.articles,
      namedOperations.Query.articlesAggregate,
    ],
  });

  return (
    <ActionIcon
      loading={loading}
      variant="light"
      color="red"
      onClick={async () => {
        await postsDelete({
          variables: {
            where: {
              id: {
                _eq: postId,
              },
            },
          },
        });
      }}
    >
      <Trash size={16} />
    </ActionIcon>
  );
};

export default ArticleDeleteButton;
