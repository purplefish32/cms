import { ActionIcon, Alert, Group, LoadingOverlay, Table } from "@mantine/core";
import { format } from "date-fns";
import Link from "next/link";
import router from "next/router";
import React, { FunctionComponent } from "react";
import { Edit } from "tabler-icons-react";
import {
  ArticleStatesEnum,
  useArticlesQuery,
} from "../../../generated/graphql";
import ArticleCounter from "../ArticleCounter";
import ArticleDeleteButton from "../ArticleDeleteButton";

const ArticlesTable: FunctionComponent = () => {
  const { data, loading } = useArticlesQuery({
    fetchPolicy: "cache-and-network",
  });

  if (data?.articles.length === 0) {
    return (
      <Alert title="No articles!" color="blue">
        There are no articles yet.
        <br />
        Use the button above to create your first article.
      </Alert>
    );
  }

  return (
    <>
      <LoadingOverlay visible={!data && loading}></LoadingOverlay> Published (
      <ArticleCounter state={ArticleStatesEnum.Published} />) | Draft (
      <ArticleCounter state={ArticleStatesEnum.Draft} />)
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.articles.map((article, key) => {
            return (
              <tr key={key}>
                <td>
                  <Link href={`articles/${article.postId}`}>
                    {article.post.title}
                  </Link>
                </td>
                <td>
                  Created <br />
                  {format(
                    new Date(article.post.createdAt),
                    "yyyy/MM/dd 'at ' HH:ii"
                  )}
                </td>
                <td>
                  <Group spacing={2} position={"right"}>
                    <ActionIcon
                      color="blue"
                      variant="light"
                      onClick={() => {
                        router.push(`pages/edit/${article.postId}`);
                      }}
                    >
                      <Edit size={16} />
                    </ActionIcon>
                    <ArticleDeleteButton postId={article.postId} />
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

export default ArticlesTable;
