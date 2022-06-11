import { Grid, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import React from "react";
import {
  namedOperations,
  TaxonomiesEnum,
  useCreateTermTaxonomyMutation,
} from "../../generated/graphql";
import { withApollo } from "../../lib/withApollo";
import TagFrom from "../../src/components/Form/TagForm";
import { TagFormSchema } from "../../src/components/Form/TagForm/tag-form-schema";
import { TagFormValues } from "../../src/components/Form/TagForm/tag-form-values-interface";
import Layout from "../../src/components/Layout";
import TagsTable from "../../src/components/TagsTable";

/**
 * TagsEditPage: The Tags Edit Page
 * @return {JSX.Element} The JSX Code for the Tags Edit Page
 */
const TagsEditPage = () => {
  const form = useForm<TagFormValues>({
    schema: zodResolver(TagFormSchema),
    initialValues: {
      name: "",
      slug: "",
      description: "",
    },
  });

  const [createTermTaxonomy, { loading }] = useCreateTermTaxonomyMutation({
    refetchQueries: [namedOperations.Query.TagsTable],
  });

  const handleSubmit = async (data: TagFormValues): Promise<void> => {
    const { name, slug, description } = data;

    showNotification({
      id: "add-tag",
      message: "The tag is being added.",
      loading: true,
      autoClose: false,
      disallowClose: true,
    });

    await createTermTaxonomy({
      variables: {
        objects: [
          {
            description,
            taxonomy: TaxonomiesEnum.Tags,
            term: {
              data: {
                name,
                slug,
              },
            },
          },
        ],
      },
    });

    updateNotification({
      id: "add-tag",
      color: "teal",
      message: "The tag has been added.",
      autoClose: 2000,
    });
  };

  return (
    <Layout>
      <Title order={1}>Tags</Title>
      <Grid>
        <Grid.Col span={4}>
          <Title order={2}>Add New Tag</Title>
          <TagFrom form={form} handleSubmit={handleSubmit} loading={loading} />
        </Grid.Col>
        <Grid.Col span={8}>
          <TagsTable />
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default withApollo()(TagsEditPage);
