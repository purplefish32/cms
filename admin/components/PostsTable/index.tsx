import { FunctionComponent, MouseEvent } from "react";
import { Label, Table } from 'semantic-ui-react'
import { usePostsTableQuery } from "../../generated/graphql";
import Link from 'next/link'
import { format } from 'date-fns';
import getStatusColor from "../../utils/getStatusColor";
import PostDeleteButton from "../PostDeleteButton";

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

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Author</Table.HeaderCell>
                    <Table.HeaderCell>Stats</Table.HeaderCell>
                    <Table.HeaderCell>Comments</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    data.posts.map((post, key) => {
                        return (
                            <Table.Row key={key}>
                                <Table.Cell><Label circular color={getStatusColor(post.status)} empty /> <Link href={`posts/${post.id}`}>{post.title}</Link></Table.Cell>
                                <Table.Cell>{post.author_id}</Table.Cell>
                                <Table.Cell>XXX</Table.Cell>
                                <Table.Cell>YYY</Table.Cell>
                                <Table.Cell>Created <br />{
                                    format(new Date(post.created_at), "yyyy/MM/dd 'at ' HH:ii")
                                }</Table.Cell>
                                <Table.Cell>
                                    <Link href={`posts/edit/${post.id}`}>Edit</Link>
                                    <PostDeleteButton postId={post.id} />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table >
    )
}

export default PostsTable