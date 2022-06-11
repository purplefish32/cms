import { Loader, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Check } from "tabler-icons-react";
import { capitalize } from "underscore.string";
import {
  PageStatesEnum,
  usePageLazyQuery,
  useUpdatePageMutation,
} from "../../../generated/graphql";
import { withApollo } from "../../../lib/withApollo";
import PageForm from "../../../src/components/Form/PageForm";
import { PageFormSchema } from "../../../src/components/Form/PageForm/page-form-schema";
import { PageFormValues } from "../../../src/components/Form/PageForm/page-form-values-interface";
import Layout from "../../../src/components/Layout";

/**
 * PageEditPage: The Page Edit Page
 * @return {JSX.Element} The JSX Code for the Page Edit Page
 */
const PageEditPage = () => {
  const { query } = useRouter();
  const postId = query["id"] as string;

  const form = useForm<PageFormValues>({
    schema: zodResolver(PageFormSchema),
    initialValues: {
      state: PageStatesEnum.Draft,
      title: "",
      slug: "",
      body: "",
    },
  });

  const [getPage, { loading }] = usePageLazyQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      uuid: postId,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPage();
      return data;
    };

    fetchData()
      .then((data) => {
        form.setValues({
          state: data?.page?.state ?? PageStatesEnum.Draft,
          title: data?.page?.post?.title ?? "",
          slug: data?.page?.post?.slug ?? "",
          body: data?.page?.body ?? "",
        });
      })
      .catch(console.error);
  }, []);

  const [updatePagesOne] = useUpdatePageMutation();

  const handleSubmit = async (data: PageFormValues): Promise<void> => {
    const { title, slug, state, body } = data;

    try {
      await updatePagesOne({
        variables: {
          pages_pk_columns: {
            postId: postId,
          },
          pages_set: {
            state:
              PageStatesEnum[capitalize(state!) as keyof typeof PageStatesEnum],
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
        message: "The page has been updated.",
      });
    } catch (error) {
      throw new Error("Could not update page");
    }
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <Title>Edit Page</Title>
      <PageForm form={form} handleSubmit={handleSubmit} />
    </Layout>
  );
};

export default withApollo()(PageEditPage);
