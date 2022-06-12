import { Button, Group, Title } from "@mantine/core";
import router from "next/router";
import React from "react";
import Layout from "../../src/components/Layout";
import PagesTable from "../../src/components/PagesTable";

const handleClick = () => {
  router.push("pages/create");
};

/**
 * ArticleIndexPage: The Page Index Page
 * @return {JSX.Element} The JSX Code for the Page Index Page
 */
const PageIndexPage = () => {
  return (
    <Layout>
      <Group position={"apart"} align={"end"}>
        <Title>Pages</Title>
        <Button onClick={handleClick}>Add New</Button>
      </Group>
      <PagesTable />
    </Layout>
  );
};

export default PageIndexPage;
