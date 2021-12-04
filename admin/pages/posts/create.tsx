import Layout from '../../components/Layout';
import PostFormCreate from '../../components/PostFormCreate';
import { Header, Content, Panel, PanelGroup } from 'rsuite';

const CreatePost = () => {
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

export default CreatePost;