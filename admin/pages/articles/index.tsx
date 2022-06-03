import { Button } from "@mantine/core";
import router from "next/router";
import React from "react";
import { ArticleStatesEnum } from "../../generated/graphql";
import { withApollo } from "../../lib/withApollo";
import ArticleCounter from "../../src/components/ArticleCounter";
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
      <h1>
        Articles <Button onClick={handleClick}>Add New</Button>
      </h1>
      Published (<ArticleCounter state={ArticleStatesEnum.Published} />) | Draft
      (<ArticleCounter state={ArticleStatesEnum.Draft} />)
      <ArticlesTable></ArticlesTable>
    </Layout>
  );
};

export default withApollo()(ArticleIndexPage);
