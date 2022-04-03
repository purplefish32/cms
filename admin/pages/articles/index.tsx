import router from "next/router";
import { Content, Panel, PanelGroup } from "rsuite";
import { Button, Header } from "semantic-ui-react";
import Layout from "../../src/components/Layout";
import { ArticleStatesEnum } from "../../generated/graphql";
import ArticlesTable from "../../src/components/ArticlesTable";
import ArticleCounter from "../../src/components/ArticleCounter";
import React from "react";

const handleClick = () => {
  router.push("articles/create");
};

/**
 * ArticleIndexPage: The Article Index Page
 * @return {JSX.Element} The JSX Code for the Article Index Page
 */
export default function ArticleIndexPage() {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>
              Articles{" "}
              <Button appearance={"primary"} onClick={handleClick}>
                Add New
              </Button>
            </h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            Published (<ArticleCounter state={ArticleStatesEnum.Published} />) |
            Draft (<ArticleCounter state={ArticleStatesEnum.Draft} />)
            <ArticlesTable></ArticlesTable>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
