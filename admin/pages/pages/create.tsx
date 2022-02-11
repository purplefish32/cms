import { Header, Content, Panel, PanelGroup } from 'rsuite';
import CreatePageForm from '../../src/components/Form/CreatePageForm/CreatePageFormApollo';
import Layout from '../../src/components/Layout';

export default () => {
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
            {/* <CreatePageForm /> */}
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  )
}