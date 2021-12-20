import Layout from '../../src/components/Layout';
import router, { useRouter } from 'next/router'
import { Header, Content, Panel, PanelGroup, Button } from 'rsuite';
import { usePostQuery } from '../../generated/graphql';
import getStateColor from '../../src/utils/getStateColor';

const Page = () => {
    const { query } = useRouter()
    const { id } = query

    const { data, error } = usePostQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            uuid: id
        }
    });

    if (error) {
        return <div>Error loading page.</div>;
    }

    if (!data) {
        return <div>Loading</div>
    }

    const {
        posts_by_pk: page,
    } = data

    const handleClick = () => {
        router.push(`/pages/edit/${id}`)
    }

    return (
        <Layout>
            <PanelGroup>
                <Panel>
                    <Header>
                        <h1>{page.title} <Button appearance={'primary'} onClick={handleClick}>Edit</Button></h1>
                    </Header>
                </Panel>
                <Panel>
                    <Content>
                        <Panel color={getStateColor(page.state)}>
                            <h4>State</h4>
                            {page.state}
                        </Panel>
                        <Panel>
                            <h4>Slug</h4>
                            {page.slug}
                        </Panel>
                        <Panel>
                            <h4>Body</h4>
                            {page.body}
                        </Panel>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}

export default Page;