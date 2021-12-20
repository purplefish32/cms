import { Form, Button } from "rsuite";
import TaxonomyFormGroupDescription from "../TaxonomyFormGroupDescription";
import TaxonomyFormGroupName from "../TaxonomyFormGroupName";
import TaxonomyFormGroupSlug from "../TaxonomyFormGroupSlug";

const TagFormCreate = () => {
  return (
    <Form>
      <TaxonomyFormGroupName />
      <TaxonomyFormGroupSlug />
      <TaxonomyFormGroupDescription />
      <Button type="submit" appearance="primary">
        Add Tag
      </Button>
    </Form>
  );
};

export default TagFormCreate;
