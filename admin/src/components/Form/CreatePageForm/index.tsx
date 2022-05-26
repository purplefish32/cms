import { Button, InputWrapper, NativeSelect, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import router from "next/router";
import React from "react";
import { Check } from "tabler-icons-react";
import { capitalize } from "underscore.string";
import { z } from "zod";
import {
  PageStatesEnum,
  PostTypesEnum,
  useCreatePageMutation,
} from "../../../../generated/graphql";
import RichTextEditor from "../../RichText";

export interface CreatePageModel {
  title: string;
  slug: string;
  body: string;
  state: PageStatesEnum;
}

const schema = z.object({
  state: z.string(),
  title: z.string(),
  slug: z.string(),
  body: z.string(),
});

const CreatePageForm = () => {
  const [insertPagesOne] = useCreatePageMutation();

  const handleSubmit = async (data: CreatePageModel) => {
    const { title, slug, state, body } = data;

    try {
      const { data } = await insertPagesOne({
        variables: {
          object: {
            post: {
              data: {
                title,
                slug,
                type: PostTypesEnum.Page,
              },
            },
            body,
            state:
              PageStatesEnum[capitalize(state) as keyof typeof PageStatesEnum],
          },
        },
      });
      showNotification({
        icon: <Check />,
        color: "teal",
        message: "The page has been created.",
      });

      router.push(`/articles/edit/${data?.insert_pages_one?.id}`);
    } catch (error) {
      throw new Error("Could not create page");
    }
  };

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      state: PageStatesEnum.Draft,
      title: "",
      slug: "",
      body: "",
    },
  });

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
