import router, { useRouter } from "next/router";
import { Header, Content, Panel, PanelGroup, Button } from "rsuite";
import { useArticleQuery } from "../../generated/graphql";
import Layout from "../../src/components/Layout";
import React from "react";

/**
 * ArticlePage: The Article Page
 * @return {JSX.Element} The JSX Code for the Article Page
 */
export default function ArticlePage() {
  const { query } = useRouter();
  const { id } = query;

  const { data, error } = useArticleQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      uuid: id,
    },
  });

  if (error) {
    return <div>Error loading article.</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  const { articles_by_pk: article } = data;

  const handleClick = () => {
    router.push(`/articles/edit/${id}`);
  };

  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>
              {article.post.title}{" "}
              <Button appearance={"primary"} onClick={handleClick}>
                Edit
              </Button>
            </h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <Panel>
              <h4>State</h4>
              {article.state}
            </Panel>
            <Panel>
              <h4>Slug</h4>
              {article.post.slug}
            </Panel>
            <Panel>
              <h4>Excerpt</h4>
              {article.excerpt}
            </Panel>
            <Panel>
              <h4>Body</h4>
              {article.body}
            </Panel>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
