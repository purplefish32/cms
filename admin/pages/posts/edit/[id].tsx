import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import PageFormUpdate from '../../../components/PageFormUpdate';
import { usePageFormQuery } from '../../../generated/graphql';

const UpdatePage = () => {

    const { query } = useRouter()

    const { data, error } = usePageFormQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            id: query['id']
        }
    });

    if (error) {
        return <div>Error loading pages.</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    const { id, body, slug, title, excerpt } = data.posts_by_pk

    return (
        <Layout>
            <h1 className={"text-4xl"}>Edit Page</h1>
            <PageFormUpdate
                id={id}
                body={body}
                slug={slug}
                title={title}
                excerpt={excerpt}
            ></PageFormUpdate>
        </Layout>
    )
}

export default UpdatePage;