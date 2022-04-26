import React from "react";
import { Content, Header, Panel, PanelGroup } from "rsuite";
import { TaxonomiesEnum } from "../../generated/graphql";
import CategoryFromCreate from "../../src/components/Form/CategoryFormCreate";
import Layout from "../../src/components/Layout";
import TermTaxonomiesTable from "../../src/components/TermTaxonomiesTable";

/**
 * CategoriesEditPage: The Category Edit Page
 * @return {JSX.Element} The JSX Code for the Categories Edit Page
 */
export default function CategoriesEditPage() {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Categories</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <h4>Add New Category</h4>
            <CategoryFromCreate />
            <TermTaxonomiesTable taxonomy={TaxonomiesEnum.Categories} />
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
