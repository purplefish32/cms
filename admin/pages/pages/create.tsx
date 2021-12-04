import Layout from '../../components/Layout';
import PageFormCreate from '../../components/PageFormCreate';
import { Header, Content, Panel, PanelGroup } from 'rsuite';

const CreatePage = () => {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Create Page</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <PageFormCreate></PageFormCreate>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  )
}

export default CreatePage;