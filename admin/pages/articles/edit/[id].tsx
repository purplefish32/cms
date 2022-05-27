import { Loader, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Check } from "tabler-icons-react";
import { capitalize } from "underscore.string";
import {
  ArticleStatesEnum,
  useArticleLazyQuery,
  useUpdateArticleMutation,
} from "../../../generated/graphql";
import ArticleForm from "../../../src/components/Form/ArticleForm";
import { ArticleFormSchema } from "../../../src/components/Form/ArticleForm/article-form-schema";
import { ArticleFormValues } from "../../../src/components/Form/ArticleForm/article-form-values-interface";
import Layout from "../../../src/components/Layout";

/**
 * ArticleEditArticle: The Article Edit Article
 * @return {JSX.Element} The JSX Code for the Article Edit Article
 */
export default function ArticleEditArticle() {
  const { query } = useRouter();
  const postId = query["id"] as string;

  const form = useForm<ArticleFormValues>({
    schema: zodResolver(ArticleFormSchema),
    initialValues: {
      state: ArticleStatesEnum.Draft,
      title: "",
      slug: "",
      excerpt: "",
      body: "",
    },
  });

  const [getArticle, { loading }] = useArticleLazyQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      uuid: postId,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArticle();
      return data;
    };

    fetchData()
      .then((data) => {
        form.setValues({
          state: data?.articles_by_pk?.state ?? ArticleStatesEnum.Draft,
          title: data?.articles_by_pk?.post?.title ?? "",
          slug: data?.articles_by_pk?.post?.slug ?? "",
          excerpt: data?.articles_by_pk?.excerpt ?? "",
          body: data?.articles_by_pk?.body ?? "",
        });
      })
      .catch(console.error);
  }, []);

  const [updateArticlesOne] = useUpdateArticleMutation();

  const handleSubmit = async (data: ArticleFormValues): Promise<void> => {
    const { title, slug, state, body } = data;

    try {
      await updateArticlesOne({
        variables: {
          articles_pk_columns: {
            post_id: postId,
          },
          articles_set: {
            state:
              ArticleStatesEnum[
                capitalize(state!) as keyof typeof ArticleStatesEnum
              ],
            body,
          },
          posts_pk_columns: {
            id: postId,
          },
          posts_set: {
            title,
            slug,
          },
        },
      });

      showNotification({
        icon: <Check />,
        color: "teal",
        message: "The article has been updated.",
      });
    } catch (error) {
      throw new Error("Could not update article");
    }
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <Title>Edit Article</Title>
      <ArticleForm form={form} handleSubmit={handleSubmit} />
    </Layout>
  );
}
