import { FunctionComponent } from "react";
import { usePagesTableQuery } from "../../generated/graphql";
import Link from 'next/link'
import PostDeleteButton from "../PostDeleteButton";
import { Button, ButtonToolbar } from "rsuite";
import router from "next/router";
import { Table } from "semantic-ui-react";

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
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    data.posts.map((post, key) => {
                        return (
                            <Table.Row key={key}>
                                <Table.Cell><Link href={`posts/${post.id}`}>{post.title}</Link></Table.Cell>
                                <Table.Cell>{post.body}</Table.Cell>
                                <Table.Cell>
                                    <ButtonToolbar>
                                        <Button
                                            size="xs"
                                            appearance="primary"
                                            onClick={
                                                () => {
                                                    router.push(`posts/edit/${post.id}`)
                                                }
                                            }
                                        >Edit</Button>
                                        <PostDeleteButton postId={post.id} />
                                    </ButtonToolbar>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    )
}

export default PostsTable