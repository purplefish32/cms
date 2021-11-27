import { FunctionComponent } from "react";
import { Table } from 'semantic-ui-react'
import { usePagesTableQuery } from "../../generated/graphql";
import Link from 'next/link'

const PostsTable: FunctionComponent = () => {
    const { data, error } = usePagesTableQuery({
        fetchPolicy: "cache-and-network"
    });

    if (error) {
        return <div>Error loading pages.</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Body</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    data.posts.map((post, key) => {
                        return (
                            <Table.Row key={key}>
                                <Table.Cell><Link href={`posts/${post.id}`}>{post.title}</Link></Table.Cell>
                                <Table.Cell>{post.body}</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    )
}

export default PostsTable