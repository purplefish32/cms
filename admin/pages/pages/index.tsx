import { Button, Title } from "@mantine/core";
import router from "next/router";
import React from "react";
import { PageStatesEnum } from "../../generated/graphql";
import Layout from "../../src/components/Layout";
import PageCounter from "../../src/components/PageCounter";
import PagesTable from "../../src/components/PagesTable";

const handleClick = () => {
  router.push("pages/create");
};

/**
 * ArticleIndexPage: The Page Index Page
 * @return {JSX.Element} The JSX Code for the Page Index Page
 */
export default function PageIndexPage() {
  return (
    <Layout>
      <Title>
        Pages <Button onClick={handleClick}>Add New</Button>
      </Title>
      Published (<PageCounter state={PageStatesEnum.Published} />) | Draft (
      <PageCounter state={PageStatesEnum.Draft} />)<PagesTable></PagesTable>
    </Layout>
  );
}
