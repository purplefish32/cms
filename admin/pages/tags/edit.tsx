import React from "react";
import { Content, FlexboxGrid, Header, Panel, PanelGroup } from "rsuite";
import { TaxonomiesEnum } from "../../generated/graphql";
import TagFormCreate from "../../src/components/Form/TagFormCreate";
import Layout from "../../src/components/Layout";
import TermTaxonomiesTable from "../../src/components/TermTaxonomiesTable";

/**
 * TagsEditPage: The Tags Edit Page
 * @return {JSX.Element} The JSX Code for the Tags Edit Page
 */
export default function TagsEditPage() {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Tags</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={6}>
                <h4>Add New Tag</h4>
                <TagFormCreate />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={18}>
                <TermTaxonomiesTable taxonomy={TaxonomiesEnum.Tags} />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
