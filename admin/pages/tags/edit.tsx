import { Checkbox, Loader, Title } from "@mantine/core";
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
      parent_slug: "",
      description: "",
    },
  });

  const [createTermTaxonomy, { loading }] = useCreateTermTaxonomyMutation({
    refetchQueries: [namedOperations.Query.termTaxonomies],
  });

  const handleSubmit = async (data: TagFormValues): Promise<void> => {
    // eslint-disable-next-line camelcase
    const { name, slug, parent_slug, description } = data;

    try {
      await createTermTaxonomy({
        variables: {
          objects: [
            {
              description,
              taxonomy: TaxonomiesEnum.Tags,
              // eslint-disable-next-line camelcase
              parent_slug: parent_slug,
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
    } catch (error) {
      throw new Error("Could not add tag");
    }
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <Title>Tags</Title>
      <Title>Add New Tag</Title>
      <TagFrom form={form} handleSubmit={handleSubmit} />
      <TermTaxonomiesTable taxonomy={TaxonomiesEnum.Tags} />
    </Layout>
  );
};

export default withApollo()(TagsEditPage);
