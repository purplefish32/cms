import Layout from '../../components/Layout';
import PostsTable from '../../components/PostsTable';

const Posts = () => {
  return (
    <Layout>
      <h1 className={"text-4xl"}>Posts</h1>
      <PostsTable></PostsTable>
    </Layout>
  )
}

export default Posts;