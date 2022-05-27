import { Button, Title } from "@mantine/core";
import router, { useRouter } from "next/router";
import React from "react";
import { useArticleQuery } from "../../generated/graphql";
import Layout from "../../src/components/Layout";

/**
 * ArticlePage: The Article Page
 * @return {JSX.Element} The JSX Code for the Page Page
 */
export default function ArticlePage() {
  const { query } = useRouter();
  const { id } = query;

  const { data, error } = useArticleQuery({
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

  const { articles_by_pk: article } = data;

  const handleClick = () => {
    router.push(`/articles/edit/${id}`);
  };

  return (
    <Layout>
      <Title>
        {article?.post?.title} <Button onClick={handleClick}>Edit</Button>
      </Title>
      <Title>State</Title>
      {article?.state}
      <Title>Slug</Title>
      {article?.post.slug}
      <Title>Excerpt</Title>
      {article?.excerpt}
      <Title>Body</Title>
      {article?.body}
    </Layout>
  );
}
