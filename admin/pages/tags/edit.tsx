import { Header, Content, Panel, PanelGroup, FlexboxGrid } from "rsuite";
import { TaxonomiesEnum } from "../../generated/graphql";
import TagFormCreate from "../../src/components/Form/TagFormCreate";
import Layout from "../../src/components/Layout";
import TermTaxonomiesTable from "../../src/components/TermTaxonomiesTable";

export default () => {
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
                                <TermTaxonomiesTable
                                    taxonomy={TaxonomiesEnum.Tags}
                                />
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    );
};