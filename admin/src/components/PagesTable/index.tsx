import { Button, LoadingOverlay, Table } from "@mantine/core";
import Link from "next/link";
import router from "next/router";
import React, { FunctionComponent } from "react";
import { usePagesQuery } from "../../../generated/graphql";
import PostDeleteButton from "../PostDeleteButton";

const PostsTable: FunctionComponent = () => {
  const { loading, data, error } = usePagesQuery({
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <div>Error loading pages.</div>;
  }

  if (!data) {
    return (
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <LoadingOverlay visible={true} />
        </tbody>
      </Table>
    );
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <LoadingOverlay visible={loading} />
        {data.pages.map((page, key) => {
          return (
            <tr key={key}>
              <td>
                <Link href={`pages/${page.post_id}`}>{page.post.title}</Link>
              </td>
              <td>{page.body}</td>
              <td>
                <Button
                  size="xs"
                  onClick={() => {
                    router.push(`pages/edit/${page.post_id}`);
                  }}
                >
                  Edit
                </Button>
                <PostDeleteButton postId={page.post_id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PostsTable;
