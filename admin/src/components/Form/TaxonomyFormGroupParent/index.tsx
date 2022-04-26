import { arrayToTree } from "performant-array-to-tree";
import { Form, TreePicker } from "rsuite";
import {
  TaxonomiesEnum,
  useTermTaxonomiesTreeQuery,
} from "../../../../generated/graphql";
import React from "react";

const TaxonomyFormGroupParent = () => {
  const { data, error } = useTermTaxonomiesTreeQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      where: {
        taxonomy: {
          _eq: TaxonomiesEnum.Categories,
        },
      },
    },
  });

  if (error) {
    return <div>Error loading data.</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <Form.Group>
      <Form.ControlLabel>Parent</Form.ControlLabel>
      <Form.Control
        name="parent_slug"
        accepter={TreePicker}
        data={arrayToTree(data.term_taxonomies_tree, {
          id: "slug",
          parentId: "parent_slug",
          dataField: null,
        })}
        labelKey={"name"}
        valueKey={"slug"}
      />
      <Form.HelpText>
        Categories, unlike tags, can have a hierarchy. You might have a Jazz
        category, and under that have children categories for Bebop and Big
        Band. Totally optional.{" "}
      </Form.HelpText>
    </Form.Group>
  );
};

export default TaxonomyFormGroupParent;
