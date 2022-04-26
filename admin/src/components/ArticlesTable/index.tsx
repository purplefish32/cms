import { format } from "date-fns";
import Link from "next/link";
import router from "next/router";
import React, { FunctionComponent } from "react";
import { Button, ButtonToolbar } from "rsuite";
import { Table } from "semantic-ui-react";
import { useArticlesQuery } from "../../../generated/graphql";
import PostDeleteButton from "../PostDeleteButton";

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
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.articles.map((article, key) => {
          return (
            <Table.Row key={key}>
              <Table.Cell>
                <Link href={`articles/${article.post_id}`}>
                  {article.post.title}
                </Link>
              </Table.Cell>
              <Table.Cell>
                Created <br />
                {format(
                  new Date(article.post.created_at),
                  "yyyy/MM/dd 'at ' HH:ii"
                )}
              </Table.Cell>
              <Table.Cell>
                <ButtonToolbar>
                  <Button
                    size="xs"
                    appearance="primary"
                    onClick={() => {
                      router.push(`articles/edit/${article.post_id}`);
                    }}
                  >
                    Edit
                  </Button>
                  <PostDeleteButton postId={article.post_id} />
                </ButtonToolbar>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default ArticlesTable;
