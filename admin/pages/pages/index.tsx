import router from 'next/router';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import PagesTable from '../../components/PagesTable';
import PostStatusCounter from '../../components/PostStatusCounter';
import { PostStatusEnum, PostTypesEnum } from '../../generated/graphql';

const handleClick = (e) => {
  e.preventDefault()
  router.push("pages/create")
}

const Pages = () => {
  return (
    <Layout>
      <h1 className={"text-4l"}>Pages <Button primary onClick={handleClick}>Add New</Button></h1>
      All (<PostStatusCounter type={PostTypesEnum.Page} />) | Published (<PostStatusCounter type={PostTypesEnum.Page} status={PostStatusEnum.Published} />) | Draft (<PostStatusCounter type={PostTypesEnum.Page} status={PostStatusEnum.Draft} />)
      <PagesTable></PagesTable>
    </Layout>
  )
}

export default Pages;