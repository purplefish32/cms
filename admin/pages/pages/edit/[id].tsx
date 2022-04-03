import { useRouter } from "next/router";
import { Content, Header, Panel, PanelGroup } from "rsuite";
import Layout from "../../../src/components/Layout";
import UpdatePageFormApollo from "../../../src/components/Form/UpdatePageForm/UpdatePageFormApollo";
import React from "react";

/**
 * PageEditPage: The Article Edit Page
 * @return {JSX.Element} The JSX Code for the Article Edit Page
 */
export default function PageEditPage() {
  const { query } = useRouter();

  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Edit Page</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <UpdatePageFormApollo
              postId={query["id"] as string}
            ></UpdatePageFormApollo>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
