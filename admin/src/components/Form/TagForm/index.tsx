import { Button, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { TagFormValues } from "./tag-form-values-interface";

interface Props {
  form: UseFormReturnType<TagFormValues>;
  handleSubmit: (data: TagFormValues) => Promise<void>;
}

const TagFrom = ({ form, handleSubmit }: Props) => {
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
      <TextInput
        label="Description"
        placeholder="Description"
        required
        {...form.getInputProps("description")}
      />
      <Button fullWidth mt="xl" type="submit">
        Add Tag
      </Button>
    </form>
  );
};

export default TagFrom;
