import { FunctionComponent } from "react";
import { Label, SemanticCOLORS, Table } from 'semantic-ui-react'
import { usePostsTableQuery } from "../../generated/graphql";
import Link from 'next/link'
import { format } from 'date-fns';

const PostsTable: FunctionComponent = () => {
    const { data, error } = usePostsTableQuery({
        fetchPolicy: "cache-and-network"
    });

    if (error) {
        return <div>Error loading posts.</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    function getStatusColor(status): SemanticCOLORS {
        switch (status) {
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

    return (
        <div>
            All (x) | Published (x) | Draft (x)
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Stats</Table.HeaderCell>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        data.posts.map((post) => {
                            return (
                                <Table.Row>
                                    <Table.Cell><Label circular color={getStatusColor(post.status)} empty /> <Link href={`posts/${post.id}`}>{post.title}</Link></Table.Cell>
                                    <Table.Cell>{post.author_id}</Table.Cell>
                                    <Table.Cell>XXX</Table.Cell>
                                    <Table.Cell>YYY</Table.Cell>
                                    <Table.Cell>Created <br />{format(new Date(post.created_at), "yyyy/MM/dd 'at ' HH:ii")}</Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table >
        </div>
    )
}

export default PostsTable