import Layout from '../../components/Layout';
import PageFormCreate from '../../components/PageFormCreate';

const CreatePage = () => {
  return (
    <Layout>
      <h1 className={"text-4xl"}>Create Page</h1>
      <PageFormCreate></PageFormCreate>
    </Layout>
  )
}

export default CreatePage;