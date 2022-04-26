import React from "react";
import { Content, Header, Panel, PanelGroup } from "rsuite";
import CreatePageFormApollo from "../../src/components/Form/CreatePageForm/CreatePageFormApollo";
import Layout from "../../src/components/Layout";

/**
 * PageCreatePage: The Page Create Page
 * @return {JSX.Element} The JSX Code for the Page Create Page
 */
export default function PageCreatePage() {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Create Page</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <CreatePageFormApollo />
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
