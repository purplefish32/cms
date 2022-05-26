/* eslint-disable require-jsdoc */
import { Button } from "@mantine/core";
import React from "react";
import {
  namedOperations,
  useDeletePostMutation,
} from "../../../generated/graphql";

function PageDeleteButton({ postId }) {
  const [postsDelete, { loading }] = useDeletePostMutation({
    refetchQueries: [
      namedOperations.Query.pages,
      namedOperations.Query.pagesAggregate,
    ],
  });

  return (
    <Button
      size="xs"
      loading={loading}
      color="red"
      onClick={async (event) => {
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

export default PageDeleteButton;
