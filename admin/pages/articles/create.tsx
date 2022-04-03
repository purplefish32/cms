import { Header, Content, Panel, PanelGroup } from "rsuite";
import CreateArticleFormApollo from "../../src/components/Form/CreateArticleForm/CreateArticleFormApollo";
import Layout from "../../src/components/Layout";
import React from "react";

/**
 * ArticleCreatePage: The Article Create Page
 * @return {JSX.Element} The JSX Code for the Article Page
 */
export default function ArticleCreatePage() {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Create Article</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <CreateArticleFormApollo />
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
