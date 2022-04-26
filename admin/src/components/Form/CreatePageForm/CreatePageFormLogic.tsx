/* eslint-disable new-cap */
import React from "react";
import { Notification, Schema, toaster } from "rsuite";
import CreatePageFormView from "./CreatePageFormView";

export interface CreatePageFormModel {
  title: string;
  slug: string;
  body: string;
  state: string;
}

const { StringType } = Schema.Types;

const CreatePageFormSchema = Schema.Model({
  title: StringType().isRequired("This field is required."),
  slug: StringType().isRequired("This field is required."), // TODO test slug unique
  body: StringType(),
});

interface Props {
  defaultValues: CreatePageFormModel;
  onSubmit: (data: CreatePageFormModel) => Promise<void>;
}

const message = (
  <Notification type={"success"} header={"success"} closable>
    The page has been created.
  </Notification>
);

const CreatePageFormLogic = ({ defaultValues, onSubmit }: Props) => {
  const handleSubmit = async (data: CreatePageFormModel) => {
    await onSubmit(data);
    toaster.push(message);
  };

  return (
    <CreatePageFormView
      defaultValues={defaultValues}
      handleSubmit={handleSubmit}
      model={CreatePageFormSchema}
    />
  );
};

export default CreatePageFormLogic;
