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
  useInsertArticleMutation,
} from "../../generated/graphql";
import ArticleForm from "../../src/components/Form/ArticleForm";
import { ArticleFormSchema } from "../../src/components/Form/ArticleForm/article-form-schema";
import { ArticleFormValues } from "../../src/components/Form/ArticleForm/article-form-values-interface";
import Layout from "../../src/components/Layout";
/**
 * ArticleCreatePage: The Article Create Page
 * @return {JSX.Element} The JSX Code for the Page Create Page
 */
const ArticleCreatePage = () => {
  const [insertArticle] = useInsertArticleMutation();

  const handleSubmitArticleForm = async (
    articleFormValues: ArticleFormValues
  ): Promise<void> => {
    const { title, slug, state, body, excerpt } = articleFormValues;

    /* const termRelationships = {
      data: tags?.map((tag) => {
        return {
          termTaxonomy: {
            data: {
              taxonomy: TaxonomiesEnum.Tags,
              term: {
                data: {
                  name: tag,
                  slug: slugify(tag),
                },
              },
            },
          },
        };
      }),
    };*/

    const { data } = await insertArticle({
      variables: {
        object: {
          post: {
            data: {
              title,
              slug,
              type: PostTypesEnum.Page,
              // termRelationships,
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

    router.push(`/articles/edit/${data?.insertArticle?.postId}`);
  };

  const articleForm = useForm<ArticleFormValues>({
    schema: zodResolver(ArticleFormSchema),
    initialValues: {
      state: ArticleStatesEnum.Draft,
      title: "",
      slug: "",
      body: "",
      excerpt: "",
      tags: [],
    },
  });

  return (
    <Layout>
      <Title>Create Article</Title>
      <ArticleForm form={articleForm} handleSubmit={handleSubmitArticleForm} />
    </Layout>
  );
};

export default ArticleCreatePage;
