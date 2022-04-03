import { Notification, Schema, toaster } from "rsuite";
import CreateArticleFormView from "./CreateArticleFormView";
import React from "react";

export interface CreateArticleFormModel {
  title: string;
  slug: string;
  body: string;
  state: string;
  excerpt: string;
}

const { StringType } = Schema.Types;

const CreatePostFormSchema = Schema.Model({
  title: StringType().isRequired("This field is required."),
  slug: StringType().isRequired("This field is required."), // TODO test slug unique
  excerpt: StringType(),
  body: StringType(),
});

interface Props {
  defaultValues: CreateArticleFormModel;
  onSubmit: (data: CreateArticleFormModel) => Promise<void>;
}

const message = (
  <Notification type={"success"} header={"success"} closable>
    The article has been created.
  </Notification>
);

const CreateArticleFormLogic = ({ defaultValues, onSubmit }: Props) => {
  const handleSubmit = async (data: CreateArticleFormModel) => {
    await onSubmit(data);
    toaster.push(message);
  };

  return (
    <CreateArticleFormView
      defaultValues={defaultValues}
      handleSubmit={handleSubmit}
      model={CreatePostFormSchema}
    />
  );
};

export default CreateArticleFormLogic;
