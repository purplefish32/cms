import { useRouter } from "next/router";
import { Content, Header, Panel, PanelGroup } from "rsuite";
import UpdateArticleFormApollo from "../../../src/components/Form/UpdateArticleForm/UpdateArticleFormApollo";
import Layout from "../../../src/components/Layout";
import React from "react";

/**
 * ArticleEditPage: The Article Edit Page
 * @return {JSX.Element} The JSX Code for the Article Edit Page
 */
export default function ArticleEditPage() {
  const { query } = useRouter();

  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Edit Article</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <UpdateArticleFormApollo
              postId={query["id"] as string}
            ></UpdateArticleFormApollo>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
