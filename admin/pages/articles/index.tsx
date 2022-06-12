import { Button, Group, Title } from "@mantine/core";
import router from "next/router";
import React from "react";
import ArticlesTable from "../../src/components/ArticlesTable";
import Layout from "../../src/components/Layout";

const handleClick = () => {
  router.push("articles/create");
};

/**
 * ArticleIndexPage: The Article Index Page
 * @return {JSX.Element} The JSX Code for the Article Index Page
 */
const ArticleIndexPage = () => {
  return (
    <Layout>
      <Group position={"apart"} align={"end"}>
        <Title>Articles</Title>
        <Button onClick={handleClick}>Add New</Button>
      </Group>
      <ArticlesTable />
    </Layout>
  );
};

export default ArticleIndexPage;
