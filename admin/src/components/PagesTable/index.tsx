import { ActionIcon, Alert, Group, LoadingOverlay, Table } from "@mantine/core";
import Link from "next/link";
import router from "next/router";
import React, { FunctionComponent } from "react";
import { Edit } from "tabler-icons-react";
import { PageStatesEnum, usePagesQuery } from "../../../generated/graphql";
import PageCounter from "../PageCounter";
import PageDeleteButton from "../PageDeleteButton";

const PostsTable: FunctionComponent = () => {
  const { loading, data } = usePagesQuery({
    fetchPolicy: "cache-and-network",
  });

  if (data?.pages.length === 0) {
    return (
      <Alert title="No pages!" color="blue">
        There are no pages yet.
        <br />
        Use the button above to create your first page.
      </Alert>
    );
  }

  return (
    <>
      <LoadingOverlay visible={!data && loading}></LoadingOverlay>
      Published (
      <PageCounter state={PageStatesEnum.Published} />) | Draft (
      <PageCounter state={PageStatesEnum.Draft} />)
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.pages.map((page, key) => {
            return (
              <tr key={key}>
                <td>
                  <Link href={`pages/${page.postId}`}>{page.post.title}</Link>
                </td>
                <td>{page.body}</td>
                <td>
                  <Group spacing={2} position={"right"}>
                    <ActionIcon
                      color="blue"
                      variant="light"
                      onClick={() => {
                        router.push(`pages/edit/${page.postId}`);
                      }}
                    >
                      <Edit size={16} />
                    </ActionIcon>
                    <PageDeleteButton postId={page.postId} />
                  </Group>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default PostsTable;
