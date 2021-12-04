import router from 'next/router';
import { Content, Header, Panel, PanelGroup, Button } from 'rsuite';
import Layout from '../../components/Layout';
import PostsTable from '../../components/PostsTable';
import PostStatusCounter from '../../components/PostStatusCounter';
import { PostStatusEnum, PostTypesEnum } from '../../generated/graphql';

const handleClick = () => {
  router.push("posts/create")
}

const Posts = () => {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Posts <Button appearance={'primary'} onClick={handleClick}>Add New</Button></h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            All (<PostStatusCounter type={PostTypesEnum.Post} />) | Published (<PostStatusCounter type={PostTypesEnum.Post} status={PostStatusEnum.Published} />) | Draft (<PostStatusCounter type={PostTypesEnum.Post} status={PostStatusEnum.Draft} />)
            <PostsTable></PostsTable>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  )
}

export default Posts;