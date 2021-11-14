import router from 'next/router';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import PagesTable from '../../components/PagesTable';

const handleClick = (e) => {
  e.preventDefault()
  router.push("pages/create")
}


const Pages = () => {
  return (
    <Layout>
      <h1 className={"text-4xl"}>Pages <Button primary onClick={handleClick}>Add New</Button></h1>
      <PagesTable></PagesTable>
    </Layout>
  )
}

export default Pages;