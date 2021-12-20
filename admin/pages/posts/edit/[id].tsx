import { useRouter } from 'next/router';
import { Content, Header, Panel, PanelGroup } from 'rsuite';
import Layout from '../../../src/components/Layout';
import PostFormUpdate from '../../../src/components/PostFormUpdate';

export default () => {
    const { query } = useRouter()

    return (
        <Layout>
            <PanelGroup>
                <Panel>
                    <Header>
                        <h1>Edit Post</h1>
                    </Header>
                </Panel>
                <Panel>
                    <Content>
                        <PostFormUpdate postId={query['id']}></PostFormUpdate>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}