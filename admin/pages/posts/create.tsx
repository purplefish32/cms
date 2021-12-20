import { Header, Content, Panel, PanelGroup } from 'rsuite';
import Layout from '../../src/components/Layout';
import PostFormCreate from '../../src/components/PostFormCreate';

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
                        <PostFormCreate></PostFormCreate>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}
