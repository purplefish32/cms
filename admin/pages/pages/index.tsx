import router from "next/router";
import Layout from "../../src/components/Layout";
import PagesTable from "../../src/components/PagesTable";
import { PageStatesEnum } from "../../generated/graphql";
import { Header, Content, Panel, PanelGroup, Button } from "rsuite";
import PageCounter from "../../src/components/PageCounter";
import React from "react";

const handleClick = () => {
  router.push("pages/create");
};

/**
 * ArticleIndexPage: The Page Index Page
 * @return {JSX.Element} The JSX Code for the Page Index Page
 */
export default function PageIndexPage() {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>
              Pages{" "}
              <Button appearance={"primary"} onClick={handleClick}>
                Add New
              </Button>
            </h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            Published (<PageCounter state={PageStatesEnum.Published} />) | Draft
            (<PageCounter state={PageStatesEnum.Draft} />)
            <PagesTable></PagesTable>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
