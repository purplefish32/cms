import router from 'next/router';
import { Content, Panel, PanelGroup } from 'rsuite';
import { Button, Header } from 'semantic-ui-react';
import Layout from '../../src/components/Layout';
import PostsTable from '../../src/components/PostsTable';
import { PostStatesEnum, PostTypesEnum } from '../../generated/graphql';
import PostStateCounter from '../../src/components/PostStateCounter';

const handleClick = () => {
    router.push("posts/create")
}

const ListPosts = () => (
    <Layout>
        <PanelGroup>
            <Panel>
                <Header>
                    <h1>Posts <Button appearance={'primary'} onClick={handleClick}>Add New</Button></h1>
                </Header>
            </Panel>
            <Panel>
                <Content>
                    All (<PostStateCounter type={PostTypesEnum.Post} />) | Published (<PostStateCounter type={PostTypesEnum.Post} state={PostStatesEnum.Published} />) | Draft (<PostStateCounter type={PostTypesEnum.Post} state={PostStatesEnum.Draft} />)
                    <PostsTable></PostsTable>
                </Content>
            </Panel>
        </PanelGroup>
    </Layout>
)

export default ListPosts