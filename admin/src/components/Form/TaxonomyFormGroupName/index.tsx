import React from "react";
import { Form } from "rsuite";

const TaxonomyFormGroupName = () => {
  return (
    <Form.Group>
      <Form.ControlLabel>Name</Form.ControlLabel>
      <Form.Control name="name" type="text" placeholder="Name" />
      <Form.HelpText>The name is how it appears on your site.</Form.HelpText>
    </Form.Group>
  );
};

export default TaxonomyFormGroupName;
