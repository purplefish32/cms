import { Checkbox, Loader, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React from "react";
import {
  namedOperations,
  TaxonomiesEnum,
  useInsertTermTaxonomyMutation,
} from "../../generated/graphql";
import { withApollo } from "../../lib/withApollo";
import CategoryFrom from "../../src/components/Form/CategoryForm";
import { CategoryFormSchema } from "../../src/components/Form/CategoryForm/category-form-schema";
import { CategoryFormValues } from "../../src/components/Form/CategoryForm/category-form-values-interface";
import Layout from "../../src/components/Layout";
import TermTaxonomiesTable from "../../src/components/TermTaxonomiesTable";

/**
 * CategoriesEditPage: The Category Edit Page
 * @return {JSX.Element} The JSX Code for the Categories Edit Page
 */
const CategoriesEditPage = () => {
  const form = useForm<CategoryFormValues>({
    schema: zodResolver(CategoryFormSchema),
    initialValues: {
      name: "",
      slug: "",
      parentSlug: "",
      description: "",
    },
  });

  const [createTermTaxonomy, { loading }] = useInsertTermTaxonomyMutation({
    refetchQueries: [namedOperations.Query.termTaxonomies],
  });

  const handleSubmit = async (data: CategoryFormValues): Promise<void> => {
    const { name, slug, parentSlug, description } = data;

    try {
      await createTermTaxonomy({
        variables: {
          object: {
            description,
            taxonomy: TaxonomiesEnum.Categories,
            parentSlug: parentSlug,
            term: {
              data: {
                name,
                slug,
              },
            },
          },
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
};

export default withApollo()(CategoriesEditPage);
