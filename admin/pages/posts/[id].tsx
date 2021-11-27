import Layout from '../../components/Layout';
import { useRouter } from 'next/router'
import { usePostViewQuery } from "../../generated/graphql";
import { Button, Label, Segment } from 'semantic-ui-react';

const Page = () => {
    const router = useRouter()
    const { id } = router.query

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

    function getStatusColor() {
        switch (post.status) {
            case 'published':
                return 'green';
            case 'draft':
                return 'yellow';
            case 'archived':
                return 'grey';
            default:
                return 'yellow';
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/posts/edit/${id}`)
    }

    return (
        <Layout>
            <h1 className={"text-4xl"}>{post.title} <Button primary onClick={handleClick}>Edit</Button></h1>
            <Segment inverted color={getStatusColor()}>
                <h4>Status</h4>
                {post.status}
            </Segment>
            <Segment>
                <h4>Slug</h4>
                {post.slug}
            </Segment>
            <Segment>
                <h4>Excerpt</h4>
                {post.excerpt}
            </Segment>
            <Segment>
                <h4>Body</h4>
                {post.body}
            </Segment>
            {
                taxonomies.map(
                    (taxonomy) => {
                        <Segment>
                            <h4>{taxonomy.name}</h4>
                            <div>
                                <em>{taxonomy.description}</em>
                            </div>
                            {taxonomy.terms.map(
                                (term) => {
                                    return (
                                        <Label>{term.name}</Label>
                                    )
                                }
                            )
                            }
                        </Segment>
                    }
                )
            }
        </Layout >
    )
}

export default Page;