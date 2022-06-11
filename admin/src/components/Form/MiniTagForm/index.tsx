import { MultiSelect } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { MiniTagFormValues } from "./mini-tag-form-values-interface";

interface Props {
  form: UseFormReturnType<MiniTagFormValues>;
  handleSubmit: (data: MiniTagFormValues) => void;
}

const MiniTagForm = ({ form, handleSubmit }: Props) => {
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        handleSubmit(values);
      })}
    >
      <MultiSelect
        data={[]}
        searchable
        creatable
        label="Tags"
        placeholder="Tags"
        getCreateLabel={(query) => `+ Create tag ${query}`}
        {...form.getInputProps("tags")}
      />
    </form>
  );
};

export default MiniTagForm;
