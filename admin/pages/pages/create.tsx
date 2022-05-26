import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import router from "next/router";
import React from "react";
import { Content, Header, Panel, PanelGroup } from "rsuite";
import { Check } from "tabler-icons-react";
import { capitalize } from "underscore.string";
import { z } from "zod";
import {
  PageStatesEnum,
  PostTypesEnum,
  useCreatePageMutation,
} from "../../generated/graphql";
import CreatePageForm from "../../src/components/Form/CreatePageForm";
import Layout from "../../src/components/Layout";

export interface CreatePageModel {
  title: string;
  slug: string;
  body: string;
  state: PageStatesEnum;
}

const schema = z.object({
  state: z.string(),
  title: z.string(),
  slug: z.string(),
  body: z.string(),
});

/**
 * PageCreatePage: The Page Create Page
 * @return {JSX.Element} The JSX Code for the Page Create Page
 */
export default function PageCreatePage() {
  const [insertPagesOne] = useCreatePageMutation();

  const handleSubmit = async (data: CreatePageModel): Promise<void> => {
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

      router.push(`/articles/edit/${data?.insert_pages_one?.id}`);
    } catch (error) {
      throw new Error("Could not create page");
    }
  };

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      state: PageStatesEnum.Draft,
      title: "",
      slug: "",
      body: "",
    },
  });

  return (
    <Layout>
      <PanelGroup>
        <Panel>
          <Header>
            <h1>Create Page</h1>
          </Header>
        </Panel>
        <Panel>
          <Content>
            <CreatePageForm form={form} handleSubmit={handleSubmit} />
          </Content>
        </Panel>
      </PanelGroup>
    </Layout>
  );
}
