import { Header, Content, Panel, PanelGroup } from 'rsuite';
import CreateArticleFormApollo from '../../src/components/Form/CreateArticleForm/CreateArticleFormApollo';
//import CreatePostForm from '../../src/components/Form/CreateArticleForm/CreatePostFormApollo';
import Layout from '../../src/components/Layout';

export default () => {
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
    )
}
