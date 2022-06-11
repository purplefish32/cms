/* eslint-disable require-jsdoc */
import { Button } from "@mantine/core";
import React from "react";
import {
  namedOperations,
  useDeletePostMutation,
} from "../../../generated/graphql";

function ArticleDeleteButton({ postId }) {
  const [postsDelete, { loading }] = useDeletePostMutation({
    refetchQueries: [
      namedOperations.Query.articles,
      namedOperations.Query.articlesAggregate,
    ],
  });

  return (
    <Button
      size="xs"
      loading={loading}
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
      Delete
    </Button>
  );
}

export default ArticleDeleteButton;
