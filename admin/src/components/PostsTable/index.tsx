import { FunctionComponent } from "react";
import { Label, Table } from 'semantic-ui-react'
import { PostTypesEnum, usePostsQuery } from "../../../generated/graphql";
import Link from 'next/link'
import { format } from 'date-fns';
import PostDeleteButton from "../PostDeleteButton";
import router from "next/router";
import { Button, ButtonToolbar } from "rsuite";
import getStateColor from "../../utils/getStateColor";

const PostsTable: FunctionComponent = () => {
    const { data, error } = usePostsQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            where: {
                type: {
                    _eq: PostTypesEnum.Post
                }
            }
        }
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
                                <Table.Cell><Label circular color={getStateColor(post.state)} empty /> <Link href={`posts/${post.id}`}>{post.title}</Link></Table.Cell>
                                <Table.Cell>{post.author_id}</Table.Cell>
                                <Table.Cell>XXX</Table.Cell>
                                <Table.Cell>YYY</Table.Cell>
                                <Table.Cell>Created <br />{
                                    format(new Date(post.created_at), "yyyy/MM/dd 'at ' HH:ii")
                                }</Table.Cell>
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
                                        >Edit</Button><PostDeleteButton postId={post.id} />
                                    </ButtonToolbar>
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