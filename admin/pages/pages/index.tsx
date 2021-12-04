import router from 'next/router';
import Layout from '../../components/Layout';
import PagesTable from '../../components/PagesTable';
import PostStatusCounter from '../../components/PostStatusCounter';
import { PostStatusEnum, PostTypesEnum } from '../../generated/graphql';
import { Header, Content, Panel, PanelGroup, Button } from 'rsuite';


const handleClick = (e) => {
  e.preventDefault()
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
            All (<PostStatusCounter type={PostTypesEnum.Page} />) | Published (<PostStatusCounter type={PostTypesEnum.Page} status={PostStatusEnum.Published} />) | Draft (<PostStatusCounter type={PostTypesEnum.Page} status={PostStatusEnum.Draft} />)
            <PagesTable></PagesTable>
          </Content>
        </Panel>
      </PanelGroup>

    </Layout>
  )
}

export default Pages;