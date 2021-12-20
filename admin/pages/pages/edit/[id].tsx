import { useRouter } from 'next/router';
import { Content, Header, Panel, PanelGroup } from 'rsuite';
import Layout from '../../../src/components/Layout';
import PageFormUpdate from '../../../src/components/PageFormUpdate';

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
                        <PageFormUpdate postId={query['id']}></PageFormUpdate>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}