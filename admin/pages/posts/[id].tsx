import Layout from '../../components/Layout';
import router, { useRouter } from 'next/router'
import { usePostViewQuery } from "../../generated/graphql";
import getStatusColor from '../../utils/getStatusColor';
import { Header, Content, Panel, PanelGroup, Button, Tag } from 'rsuite';

const Page = () => {
    const { query } = useRouter()
    const { id } = query

    const { data, error } = usePostViewQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            uuid: id
        }
    });

    if (error) {
        return <div>Error loading posts.</div>;
    }

    if (!data) {
        return <div>Loading</div>
    }

    const {
        posts_by_pk: post,
        taxonomies
    } = data

    const handleClick = () => {
        router.push(`/posts/edit/${id}`)
    }

    return (
        <Layout>
            <PanelGroup>
                <Panel>
                    <Header>
                        <h1 className={"text-4xl"}>{post.title} <Button appearance={'primary'} onClick={handleClick}>Edit</Button></h1>
                    </Header>
                </Panel>
                <Panel>
                    <Content>
                        <Panel color={getStatusColor(post.status)}>
                            <h4>Status</h4>
                            {post.status}
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
                        {
                            taxonomies.map(
                                (taxonomy) => {
                                    <Panel>
                                        <h4>{taxonomy.name}</h4>
                                        <div>
                                            <em>{taxonomy.description}</em>
                                        </div>
                                        {taxonomy.terms.map(
                                            (term) => {
                                                return (
                                                    <Tag>{term.name}</Tag>
                                                )
                                            }
                                        )
                                        }
                                    </Panel>
                                }
                            )
                        } </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}

export default Page;