import Layout from "../../src/components/Layout";
import router, { useRouter } from "next/router";
import { Header, Content, Panel, PanelGroup, Button } from "rsuite";
import React from "react";
import { usePageQuery } from "../../generated/graphql";

/**
 * PagePage: The Page Page
 * @return {JSX.Element} The JSX Code for the Page Page
 */
export default function PagePage() {
  const { query } = useRouter();
  const { id } = query;

  const { data, error } = usePageQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      uuid: id,
    },
  });

  if (error) {
    return <div>Error loading page.</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  const { pages_by_pk: page } = data;

  const handleClick = () => {
    router.push(`/pages/edit/${id}`);
  };

  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>
              {page.post.title}{" "}
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
              {page.state}
            </Panel>
            <Panel>
              <h4>Slug</h4>
              {page.post.slug}
            </Panel>
            <Panel>
              <h4>Body</h4>
              {page.body}
            </Panel>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
