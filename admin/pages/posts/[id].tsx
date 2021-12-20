import router, { useRouter } from 'next/router'
import { Header, Content, Panel, PanelGroup, Button, Tag } from 'rsuite';
import Layout from '../../src/components/Layout';
import { usePostQuery } from '../../generated/graphql';
import getStateColor from '../../src/utils/getStateColor';

const ShowPost = () => {
    const { query } = useRouter()
    const { id } = query

    const { data, error } = usePostQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            uuid: id
        }
    });

    console.log(data);

    if (error) {
        return <div>Error loading post.</div>;
    }

    if (!data) {
        return <div>Loading</div>
    }

    const {
        posts_by_pk: post,
    } = data

    const handleClick = () => {
        router.push(`/posts/edit/${id}`)
    }

    return (
        <Layout>
            <PanelGroup>
                <Panel>
                    <Header>
                        <h1>{post.title} <Button appearance={'primary'} onClick={handleClick}>Edit</Button></h1>
                    </Header>
                </Panel>
                <Panel>
                    <Content>
                        <Panel color={getStateColor(post.state)}>
                            <h4>State</h4>
                            {post.state}
                        </Panel>
                        <Panel>
                            <h4>Slug</h4>
                            {post.slug}
                        </Panel>
                        <Panel>
                            <h4>Excerpt</h4>
                            {post.excerpt}
                        </Panel>
                        <Panel>
                            <h4>Body</h4>
                            {post.body}
                        </Panel>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}

export default ShowPost