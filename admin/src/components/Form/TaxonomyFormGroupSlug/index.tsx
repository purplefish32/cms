import React from "react";
import { Form } from "rsuite";

const TaxonomyFormGroupSlug = () => {
  return (
    <Form.Group>
      <Form.ControlLabel>Slug</Form.ControlLabel>
      <Form.Control checkAsync name="slug" type="text" placeholder="Slug" />
      <Form.HelpText>
        The “slug” is the URL-friendly version of the name. It is usually all
        lowercase and contains only letters, numbers, and hyphens.
      </Form.HelpText>
    </Form.Group>
  );
};

export default TaxonomyFormGroupSlug;
