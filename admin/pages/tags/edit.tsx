import { Checkbox, Grid, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
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
import TermTaxonomiesTable from "../../src/components/TermTaxonomiesTable";

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
    refetchQueries: [namedOperations.Query.termTaxonomies],
  });

  const handleSubmit = async (data: TagFormValues): Promise<void> => {
    const { name, slug, description } = data;

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

    showNotification({
      icon: <Checkbox />,
      color: "teal",
      message: "The tag has been added.",
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
          <TermTaxonomiesTable taxonomy={TaxonomiesEnum.Tags} />
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default withApollo()(TagsEditPage);
