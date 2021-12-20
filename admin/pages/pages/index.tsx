import router from 'next/router';
import Layout from '../../src/components/Layout';
import PagesTable from '../../src/components/PagesTable';
import { PostStatesEnum, PostTypesEnum } from '../../generated/graphql';
import { Header, Content, Panel, PanelGroup, Button } from 'rsuite';
import PostStateCounter from '../../src/components/PostStateCounter';

const handleClick = () => {
  router.push("pages/create")
}

const Pages = () => {
  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Pages <Button appearance={"primary"} onClick={handleClick}>Add New</Button></h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            Published (<PostStateCounter type={PostTypesEnum.Page} state={PostStatesEnum.Published} />) | Draft (<PostStateCounter type={PostTypesEnum.Page} state={PostStatesEnum.Draft} />)
            <PagesTable></PagesTable>
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  )
}

export default Pages;