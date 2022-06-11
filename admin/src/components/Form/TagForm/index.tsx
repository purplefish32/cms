import { Button, Textarea, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { TagFormValues } from "./tag-form-values-interface";

interface Props {
  loading: boolean;
  form: UseFormReturnType<TagFormValues>;
  handleSubmit: (data: TagFormValues) => void;
}

const TagFrom = ({ loading, form, handleSubmit }: Props) => {
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <TextInput
        label="Name"
        placeholder="Name"
        required
        {...form.getInputProps("name")}
      />
      <TextInput
        label="Slug"
        placeholder="Slug"
        required
        {...form.getInputProps("slug")}
      />
      <Textarea
        label="Description"
        placeholder="Description"
        autosize
        minRows={2}
        required
        {...form.getInputProps("description")}
      />
      <Button fullWidth mt="xl" type="submit" loading={loading}>
        Add Tag
      </Button>
    </form>
  );
};

export default TagFrom;
