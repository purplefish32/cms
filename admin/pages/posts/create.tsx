import { Header, Content, Panel, PanelGroup } from 'rsuite';
import CreatePostForm from '../../src/components/Form/CreatePostForm/CreatePostFormApollo';
import Layout from '../../src/components/Layout';

export default () => {
    return (
        <Layout>
            <PanelGroup>
                <Panel>
                    <Header>
                        <h1>Create Post</h1>
                    </Header>
                </Panel>
                <Panel>
                    <Content>
                        <CreatePostForm />
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}
