import { Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import router from "next/router";
import React from "react";
import { Check } from "tabler-icons-react";
import { capitalize } from "underscore.string";
import {
  ArticleStatesEnum,
  PostTypesEnum,
  useCreateArticleMutation,
} from "../../generated/graphql";
import ArticleForm from "../../src/components/Form/ArticleForm";
import { ArticleFormSchema } from "../../src/components/Form/ArticleForm/article-form-schema";
import { ArticleFormValues } from "../../src/components/Form/ArticleForm/article-form-values-interface";
import Layout from "../../src/components/Layout";
/**
 * ArticleCreatePage: The Article Create Page
 * @return {JSX.Element} The JSX Code for the Page Create Page
 */
export default function ArticleCreatePage() {
  const [insertArticlesOne] = useCreateArticleMutation();

  const handleSubmit = async (data: ArticleFormValues): Promise<void> => {
    const { title, slug, state, body, excerpt } = data;

    try {
      const { data } = await insertArticlesOne({
        variables: {
          object: {
            post: {
              data: {
                title,
                slug,
                type: PostTypesEnum.Page,
              },
            },
            body,
            excerpt,
            state:
              ArticleStatesEnum[
                capitalize(state) as keyof typeof ArticleStatesEnum
              ],
          },
        },
      });

      showNotification({
        icon: <Check />,
        color: "teal",
        message: "The article has been created.",
      });

      router.push(`/articles/edit/${data?.insert_articles_one?.post_id}`);
    } catch (error) {
      throw new Error("Could not create article");
    }
  };

  const articleForm = useForm<ArticleFormValues>({
    schema: zodResolver(ArticleFormSchema),
    initialValues: {
      state: ArticleStatesEnum.Draft,
      title: "",
      slug: "",
      body: "",
      excerpt: "",
    },
  });

  return (
    <Layout>
      <Title>Create Article</Title>
      <ArticleForm form={articleForm} handleSubmit={handleSubmit} />
    </Layout>
  );
}
