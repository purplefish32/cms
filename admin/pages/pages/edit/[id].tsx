import { useRouter } from 'next/router';
import { Content, Header, Panel, PanelGroup } from 'rsuite';
import Layout from '../../../src/components/Layout';
import UpdatePageForm from '../../../src/components/Form/UpdatePageForm/UpdatePageFormApollo';

export default () => {
    const { query } = useRouter()

    return (
        <Layout>
            <PanelGroup>
                <Panel>
                    <Header>
                        <h1>Edit Page</h1>
                    </Header>
                </Panel>
                <Panel>
                    <Content>
                        <UpdatePageForm postId={query['id'] as string}></UpdatePageForm>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}