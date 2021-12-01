import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import PageFormUpdate from '../../../components/PageFormUpdate';

const UpdatePage = () => {

    const { query } = useRouter()

    return (
        <Layout>
            <h1 className={"text-4xl"}>Edit Page</h1>
            <PageFormUpdate postId={query['id']}></PageFormUpdate>
        </Layout>
    )
}

export default UpdatePage;