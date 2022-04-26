import React, { useState } from "react";
import { Button, Form, InputPicker } from "rsuite";
import { Schema } from "schema-typed";
import { PageStatesEnum } from "../../../../generated/graphql";
import { CreatePageFormModel } from "./CreatePageFormLogic";

interface Props {
  model: Schema<
    {
      title: unknown;
      slug: unknown;
      body: unknown;
    },
    string
  >;
  defaultValues: CreatePageFormModel;
  handleSubmit: (data: CreatePageFormModel) => Promise<void>;
}

const CreatePageFormView = ({ model, defaultValues, handleSubmit }: Props) => {
  const [formValue, setFormValue] =
    useState<CreatePageFormModel>(defaultValues);

  return (
    <Form
      onChange={(formValue) => {
        setFormValue(formValue as CreatePageFormModel);
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
              value: PageStatesEnum.Draft,
            },
            {
              label: "Published",
              value: PageStatesEnum.Published,
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
        <Form.ControlLabel>Body</Form.ControlLabel>
        <Form.Control name="body" placeholder="Body" />
      </Form.Group>
      <Button
        type="submit"
        appearance="primary"
        onClick={() => {
          handleSubmit(formValue);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default CreatePageFormView;
