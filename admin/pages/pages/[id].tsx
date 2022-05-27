import { Button, Title } from "@mantine/core";
import router, { useRouter } from "next/router";
import React from "react";
import { usePageQuery } from "../../generated/graphql";
import Layout from "../../src/components/Layout";

/**
 * PagePage: The Page Page
 * @return {JSX.Element} The JSX Code for the Page Page
 */
export default function PagePage() {
  const { query } = useRouter();
  const { id } = query;

  const { data, error } = usePageQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      uuid: id,
    },
  });

  if (error) {
    return <div>Error loading page.</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  const { pages_by_pk: page } = data;

  const handleClick = () => {
    router.push(`/pages/edit/${id}`);
  };

  return (
    <Layout>
      <Title>
        {page?.post?.title} <Button onClick={handleClick}>Edit</Button>
      </Title>
      <Title>State</Title>
      {page?.state}
      <Title>Slug</Title>
      {page?.post.slug}
      <Title>Body</Title>
      {page?.body}
    </Layout>
  );
}
