import { Button } from "@mantine/core";
import React, { useState } from "react";
import { Form, InputPicker } from "rsuite";
import { Schema } from "schema-typed";
import { PageStatesEnum } from "../../../../generated/graphql";
import { UpdatePageFormModel } from "./UpdatePageFormLogic";

interface Props {
  model: Schema<
    {
      title: unknown;
      slug: unknown;
      body: unknown;
    },
    string
  >;
  defaultValues: UpdatePageFormModel;
  handleSubmit: (data: UpdatePageFormModel) => Promise<void>;
}

const UpdatePageFormView = ({ model, defaultValues, handleSubmit }: Props) => {
  const [formValue, setFormValue] =
    useState<UpdatePageFormModel>(defaultValues);

  return (
    <Form
      onChange={(formValue) => {
        setFormValue(formValue as UpdatePageFormModel);
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
        onClick={() => {
          handleSubmit(formValue);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default UpdatePageFormView;
