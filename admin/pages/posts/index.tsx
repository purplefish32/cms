import router from 'next/router';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import PostsTable from '../../components/PostsTable';

const handleClick = (e) => {
  e.preventDefault()
  router.push("posts/create")
}

const Posts = () => {
  return (
    <Layout>
      <h1 className={"text-4xl"}>Posts <Button primary onClick={handleClick}>Add New</Button></h1>
      <PostsTable></PostsTable>
    </Layout>
  )
}

export default Posts;