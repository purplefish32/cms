import { Button, Table } from "@mantine/core";
import { format } from "date-fns";
import Link from "next/link";
import router from "next/router";
import React, { FunctionComponent } from "react";
import { useArticlesQuery } from "../../../generated/graphql";
import ArticleDeleteButton from "../ArticleDeleteButton";

const ArticlesTable: FunctionComponent = () => {
  const { data, error } = useArticlesQuery({
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <div>Error loading posts.</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.articles.map((article, key) => {
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
                <Button
                  size="xs"
                  onClick={() => {
                    router.push(`articles/edit/${article.postId}`);
                  }}
                >
                  Edit
                </Button>
                <ArticleDeleteButton postId={article.postId} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ArticlesTable;
