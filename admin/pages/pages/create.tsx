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
  useCreatePageMutation,
} from "../../generated/graphql";
import PageForm from "../../src/components/Form/PageForm";
import { PageFormSchema } from "../../src/components/Form/PageForm/page-form-schema";
import { PageFormValues } from "../../src/components/Form/PageForm/page-form-values-interface";
import Layout from "../../src/components/Layout";
/**
 * PageCreatePage: The Page Create Page
 * @return {JSX.Element} The JSX Code for the Page Create Page
 */
export default function PageCreatePage() {
  const [insertPagesOne] = useCreatePageMutation();

  const handleSubmit = async (data: PageFormValues): Promise<void> => {
    const { title, slug, state, body } = data;

    try {
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

      router.push(`/pages/edit/${data?.insert_pages_one?.post_id}`);
    } catch (error) {
      throw new Error("Could not create page");
    }
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
}
