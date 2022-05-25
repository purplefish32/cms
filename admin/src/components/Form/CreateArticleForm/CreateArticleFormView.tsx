import { Button } from "@mantine/core";
import React, { useState } from "react";
import { Form, InputPicker } from "rsuite";
import { Schema } from "schema-typed";
import { ArticleStatesEnum } from "../../../../generated/graphql";
import { CreateArticleFormModel } from "./CreateArticleFormLogic";

interface Props {
  model: Schema<
    {
      title: unknown;
      slug: unknown;
      excerpt: unknown;
      body: unknown;
    },
    string
  >;
  defaultValues: CreateArticleFormModel;
  handleSubmit: (data: CreateArticleFormModel) => Promise<void>;
}

const CreateArticleFormView = ({
  model,
  defaultValues,
  handleSubmit,
}: Props) => {
  const [formValue, setFormValue] =
    useState<CreateArticleFormModel>(defaultValues);

  return (
    <Form
      onChange={(formValue) => {
        setFormValue(formValue as CreateArticleFormModel);
      }}
      formValue={formValue}
      model={model}
      fluid
    >
      <Form.Group>
        <Form.Control
          name="state"
          accepter={InputPicker}
          data={[
            {
              label: "Draft",
              value: ArticleStatesEnum.Draft,
            },
            {
              label: "Published",
              value: ArticleStatesEnum.Published,
            },
          ]}
        />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Title</Form.ControlLabel>
        <Form.Control name="title" type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Slug</Form.ControlLabel>
        <Form.Control
          checkAsync
          name="slug"
          type="text"
          placeholder="Slug"
          label="Slug"
        />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Excerpt</Form.ControlLabel>
        <Form.Control name="excerpt" placeholder="Excerpt" />
      </Form.Group>
      <Form.Group>
        <Form.ControlLabel>Body</Form.ControlLabel>
        <Form.Control name="body" placeholder="Body" />
      </Form.Group>
      <Button
        type="submit"
        onClick={() => {
          handleSubmit(formValue);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default CreateArticleFormView;
