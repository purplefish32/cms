import { Form } from "rsuite";

const TaxonomyFormGroupDescription = () => {
  return (
    <Form.Group>
      <Form.ControlLabel>Description</Form.ControlLabel>
      <Form.Control name="description" type="text" />
      <Form.HelpText>
        The description is not prominent by default; however, some themes may
        show it.
      </Form.HelpText>
    </Form.Group>
  );
};

export default TaxonomyFormGroupDescription;