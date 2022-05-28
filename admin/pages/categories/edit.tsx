import { Checkbox, Loader, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React from "react";
import {
  namedOperations,
  TaxonomiesEnum,
  useCreateTermTaxonomyMutation,
} from "../../generated/graphql";
import CategoryFrom from "../../src/components/Form/CategoryForm";
import { CategoryFormSchema } from "../../src/components/Form/CategoryForm/category-form-schema";
import { CategoryFormValues } from "../../src/components/Form/CategoryForm/category-form-values-interface";
import Layout from "../../src/components/Layout";
import TermTaxonomiesTable from "../../src/components/TermTaxonomiesTable";

/**
 * CategoriesEditPage: The Category Edit Page
 * @return {JSX.Element} The JSX Code for the Categories Edit Page
 */
export default function CategoriesEditPage() {
  const form = useForm<CategoryFormValues>({
    schema: zodResolver(CategoryFormSchema),
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

  const handleSubmit = async (data: CategoryFormValues): Promise<void> => {
    // eslint-disable-next-line camelcase
    const { name, slug, parent_slug, description } = data;

    try {
      await createTermTaxonomy({
        variables: {
          objects: [
            {
              description,
              taxonomy: TaxonomiesEnum.Categories,
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
        message: "The category has been added.",
      });
    } catch (error) {
      throw new Error("Could not add category");
    }
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <Title>Categories</Title>
      <Title>Add New Category</Title>
      <CategoryFrom form={form} handleSubmit={handleSubmit} />
      <TermTaxonomiesTable taxonomy={TaxonomiesEnum.Categories} />
    </Layout>
  );
}
