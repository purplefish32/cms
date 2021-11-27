import router from 'next/router';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import PostsTable from '../../components/PostsTable';
import PostStatusCounter from '../../components/PostStatusCounter';
import { PostStatusEnum, PostTypesEnum } from '../../generated/graphql';

const handleClick = (e) => {
  e.preventDefault()
  router.push("posts/create")
}

const Posts = () => {
  return (
    <Layout>
      <h1 className={"text-4xl"}>Posts <Button primary onClick={handleClick}>Add New</Button></h1>
      All (<PostStatusCounter type={PostTypesEnum.Post} />) | Published (<PostStatusCounter type={PostTypesEnum.Post} status={PostStatusEnum.Published} />) | Draft (<PostStatusCounter type={PostTypesEnum.Post} status={PostStatusEnum.Draft} />)
      <PostsTable></PostsTable>
    </Layout>
  )
}

export default Posts;