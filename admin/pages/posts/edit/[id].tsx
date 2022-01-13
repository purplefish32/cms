import { useRouter } from 'next/router';
import { Content, Header, Panel, PanelGroup } from 'rsuite';
import Layout from '../../../src/components/Layout';
import UpdatePostForm from '../../../src/components/Form/UpdatePostForm/UpdatePostFormApollo';

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
                        <UpdatePostForm postId={query['id'] as string}></UpdatePostForm>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}