import { FunctionComponent } from "react";
import { Label, Table } from 'semantic-ui-react'
import { useArticlesQuery } from "../../../generated/graphql";
import Link from 'next/link'
import { format } from 'date-fns';
import PostDeleteButton from "../PostDeleteButton";
import router from "next/router";
import { Button, ButtonToolbar } from "rsuite";
//import getStateColor from "../../utils/getStateColor";

const ArticlesTable: FunctionComponent = () => {
    const { data, error } = useArticlesQuery({
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
                    <Table.HeaderCell>Stats</Table.HeaderCell>
                    <Table.HeaderCell>Comments</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    data.articles.map((article, key) => {
                        return (
                            <Table.Row key={key}>
                                {/* <Table.Cell><Label circular color={getStateColor(article.state)} empty /> <Link href={`articles/${article.id}`}>{article.post.title}</Link></Table.Cell> */}
                                <Table.Cell><Label circular empty /> <Link href={`articles/${article.post_id}`}>{article.post.title}</Link></Table.Cell>
                                <Table.Cell>XXX</Table.Cell>
                                <Table.Cell>YYY</Table.Cell>
                                <Table.Cell>Created <br />{
                                    format(new Date(article.post.created_at), "yyyy/MM/dd 'at ' HH:ii")
                                }</Table.Cell>
                                <Table.Cell>
                                    <ButtonToolbar>
                                        <Button
                                            size="xs"
                                            appearance="primary"
                                            onClick={
                                                () => {
                                                    router.push(`articles/edit/${article.post_id}`)
                                                }
                                            }
                                        >Edit</Button><PostDeleteButton postId={article.post_id} />
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

export default ArticlesTable