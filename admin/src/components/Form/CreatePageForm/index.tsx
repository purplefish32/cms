import { Button, InputWrapper, NativeSelect, TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { PageStatesEnum } from "../../../../generated/graphql";
import { CreatePageModel } from "../../../../pages/pages/create";
import RichTextEditor from "../../RichText";

interface Props {
  form: UseFormReturnType<CreatePageModel>;
  handleSubmit: (data: CreatePageModel) => Promise<void>;
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
      <InputWrapper label="Body">
        <RichTextEditor
          placeholder="Body"
          {...form.getInputProps("body")}
          controls={[
            ["bold", "italic", "underline", "link"],
            ["unorderedList", "h1", "h2", "h3", "h4"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
        />
      </InputWrapper>
      <Button fullWidth mt="xl" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreatePageForm;
