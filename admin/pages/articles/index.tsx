import router from 'next/router';
import { Content, Panel, PanelGroup } from 'rsuite';
import { Button, Header } from 'semantic-ui-react';
import Layout from '../../src/components/Layout';
import { ArticleStatesEnum } from '../../generated/graphql';
import ArticlesTable from '../../src/components/ArticlesTable';
import ArticleCounter from '../../src/components/ArticleCounter';

const handleClick = () => {
    router.push("articles/create")
}

const ListPosts = () => (
    <Layout>
        <PanelGroup>
            <Panel>
                <Header>
                    <h1>Articles <Button appearance={'primary'} onClick={handleClick}>Add New</Button></h1>
                </Header>
            </Panel>
            <Panel>
                <Content>
                    Published (<ArticleCounter state={ArticleStatesEnum.Published} />) | Draft (<ArticleCounter state={ArticleStatesEnum.Draft} />)
                    <ArticlesTable></ArticlesTable>
                </Content>
            </Panel>
        </PanelGroup>
    </Layout>
)

export default ListPosts