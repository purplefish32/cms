import { Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import router from "next/router";
import React from "react";
import { Check } from "tabler-icons-react";
import { capitalize } from "underscore.string";
import {
  PageStatesEnum,
  PostTypesEnum,
  useInsertPageMutation,
} from "../../generated/graphql";
import { withApollo } from "../../lib/withApollo";
import PageForm from "../../src/components/Form/PageForm";
import { PageFormSchema } from "../../src/components/Form/PageForm/page-form-schema";
import { PageFormValues } from "../../src/components/Form/PageForm/page-form-values-interface";
import Layout from "../../src/components/Layout";
/**
 * PageCreatePage: The Page Create Page
 * @return {JSX.Element} The JSX Code for the Page Create Page
 */
const PageCreatePage = () => {
  const [insertPagesOne] = useInsertPageMutation();

  const handleSubmit = async (
    pageFormValues: PageFormValues
  ): Promise<void> => {
    const { title, slug, state, body } = pageFormValues;

    const { data } = await insertPagesOne({
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
          state:
            PageStatesEnum[capitalize(state) as keyof typeof PageStatesEnum],
        },
      },
    });

    showNotification({
      icon: <Check />,
      color: "teal",
      message: "The page has been created.",
    });

    router.push(`/pages/edit/${data?.insertPage?.postId}`);
  };

  const pageForm = useForm<PageFormValues>({
    schema: zodResolver(PageFormSchema),
    initialValues: {
      state: PageStatesEnum.Draft,
      title: "",
      slug: "",
      body: "",
    },
  });

  return (
    <Layout>
      <Title>Create Page</Title>
      <PageForm form={pageForm} handleSubmit={handleSubmit} />
    </Layout>
  );
};

export default withApollo()(PageCreatePage);
