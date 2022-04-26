/* eslint-disable new-cap */
/* eslint-disable camelcase */
import React, { useState } from "react";
import { Button, Form, Schema } from "rsuite";
import {
  TaxonomiesEnum,
  useCreateTermTaxonomyMutation,
} from "../../../../generated/graphql";
import { namedOperations } from "../../../../types";
import TaxonomyFormGroupDescription from "../TaxonomyFormGroupDescription";
import TaxonomyFormGroupName from "../TaxonomyFormGroupName";
import TaxonomyFormGroupParent from "../TaxonomyFormGroupParent";
import TaxonomyFormGroupSlug from "../TaxonomyFormGroupSlug";

interface IFormValue {
  name: string;
  slug: string;
  parent_slug: string;
  description: string;
}

const CategoryFromCreate = () => {
  const [formValue, setFormValue] = useState<IFormValue>({
    name: "",
    slug: "",
    parent_slug: "uncategorized",
    description: "",
  });

  const { StringType } = Schema.Types;

  const model = Schema.Model({
    name: StringType().isRequired("This field is required."),
    slug: StringType().isRequired("This field is required."), // TODO test slug unique
    parent: StringType(),
    description: StringType(),
  });

  const [insert_term_taxonomies, { loading }] = useCreateTermTaxonomyMutation({
    refetchQueries: [namedOperations.Query.termTaxonomies],
  });

  const handleSubmit = async () => {
    const { name, slug, parent_slug, description } = formValue;

    try {
      await insert_term_taxonomies({
        variables: {
          objects: [
            {
              description,
              taxonomy: TaxonomiesEnum.Categories,
              parent_slug,
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onChange={(formValue) => {
        setFormValue(formValue as IFormValue);
      }}
      formValue={formValue}
      model={model}
      fluid
    >
      <TaxonomyFormGroupName />
      <TaxonomyFormGroupSlug />
      <TaxonomyFormGroupParent />
      <TaxonomyFormGroupDescription />
      <Button
        type="submit"
        appearance="primary"
        onClick={handleSubmit}
        loading={loading}
      >
        Add Category
      </Button>
    </Form>
  );
};

export default CategoryFromCreate;
