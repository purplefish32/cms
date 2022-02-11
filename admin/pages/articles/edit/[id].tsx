import { useRouter } from 'next/router';
import { Content, Header, Panel, PanelGroup } from 'rsuite';
import UpdateArticleFormApollo from '../../../src/components/Form/UpdateArticleForm/UpdateArticleFormApollo';
import Layout from '../../../src/components/Layout';

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
                        <UpdateArticleFormApollo postId={query['id'] as string}></UpdateArticleFormApollo>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}