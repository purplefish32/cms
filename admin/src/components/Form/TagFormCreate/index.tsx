/* eslint-disable new-cap */
/* eslint-disable camelcase */
import { Button } from "@mantine/core";
import React, { useState } from "react";
import { Form, Schema } from "rsuite";
import {
  namedOperations,
  TaxonomiesEnum,
  useCreateTermTaxonomyMutation,
} from "../../../../generated/graphql";
import TaxonomyFormGroupDescription from "../TaxonomyFormGroupDescription";
import TaxonomyFormGroupName from "../TaxonomyFormGroupName";
import TaxonomyFormGroupSlug from "../TaxonomyFormGroupSlug";

interface FormValue {
  name: string;
  slug: string;
  description: string;
}

const TagFormCreate = () => {
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    slug: "",
    description: "",
  });

  const { StringType } = Schema.Types;

  const model = Schema.Model({
    name: StringType().isRequired("This field is required."),
    slug: StringType().isRequired("This field is required."), // TODO test slug unique
    description: StringType(),
  });

  const [insert_term_taxonomies, { loading }] = useCreateTermTaxonomyMutation({
    refetchQueries: [namedOperations.Query.termTaxonomies],
  });

  const handleSubmit = async () => {
    const { name, slug, description } = formValue;

    try {
      await insert_term_taxonomies({
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onChange={(formValue) => {
        setFormValue(formValue as FormValue);
      }}
      formValue={formValue}
      model={model}
      fluid
    >
      <TaxonomyFormGroupName />
      <TaxonomyFormGroupSlug />
      <TaxonomyFormGroupDescription />
      <Button type="submit" onClick={handleSubmit} loading={loading}>
        Add Tag
      </Button>
    </Form>
  );
};

export default TagFormCreate;
