import { Button, NativeSelect, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { PageStatesEnum } from "../../../../generated/graphql";
import { PageFormValues } from "./page-form-values-interface";
// import RichTextEditor from "../../RichText";

interface Props {
  form: UseFormReturnType<PageFormValues>;
  handleSubmit: (data: PageFormValues) => Promise<void>;
}

const CreatePageForm = ({ form, handleSubmit }: Props) => {
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <NativeSelect
        label="State"
        placeholder="Pick one"
        data={[
          { value: PageStatesEnum.Draft, label: "Draft" },
          { value: PageStatesEnum.Published, label: "Published" },
        ]}
      />
      <TextInput
        label="Title"
        placeholder="Title"
        required
        {...form.getInputProps("title")}
      />
      <TextInput
        label="Slug"
        placeholder="Slug"
        required
        {...form.getInputProps("slug")}
      />
      <TextInput
        label="Body"
        placeholder="Body"
        required
        {...form.getInputProps("body")}
      />
      <Button fullWidth mt="xl" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreatePageForm;
