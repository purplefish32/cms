import { Button, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { CategoryFormValues } from "./category-form-values-interface";

interface Props {
  form: UseFormReturnType<CategoryFormValues>;
  handleSubmit: (data: CategoryFormValues) => Promise<void>;
}

const CategoryFrom = ({ form, handleSubmit }: Props) => {
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
        Add Category
      </Button>
    </form>
  );
};

export default CategoryFrom;
