import { Button, NativeSelect, Textarea, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { ArticleStatesEnum } from "../../../../generated/graphql";
import { ArticleFormValues } from "./article-form-values-interface";

interface Props {
  form: UseFormReturnType<ArticleFormValues>;
  handleSubmit: (data: ArticleFormValues) => Promise<void>;
}

const ArticleForm = ({ form, handleSubmit }: Props) => {
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <NativeSelect
        label="State"
        placeholder="Pick one"
        data={[
          { value: ArticleStatesEnum.Draft, label: "Draft" },
          { value: ArticleStatesEnum.Published, label: "Published" },
        ]}
        {...form.getInputProps("state")}
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
        label="Excerpt"
        placeholder="Excerpt"
        required
        {...form.getInputProps("excerpt")}
      />
      <Textarea
        label="Body"
        placeholder="Body"
        required
        autosize
        minRows={12}
        {...form.getInputProps("body")}
      />
      <Button fullWidth mt="xl" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ArticleForm;
