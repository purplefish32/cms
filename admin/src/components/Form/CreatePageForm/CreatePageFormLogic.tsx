import { useForm, zodResolver } from "@mantine/form";
import React from "react";
import { Notification, toaster } from "rsuite";
import { z } from "zod";
import { PageStatesEnum } from "../../../../generated/graphql";
import CreatePageFormView from "./CreatePageFormView";

export interface CreatePageFormModel {
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

interface Props {
  onSubmit: (data: CreatePageFormModel) => Promise<void>;
}

const message = (
  <Notification type={"success"} header={"success"} closable>
    The page has been created.
  </Notification>
);

const CreatePageFormLogic = ({ onSubmit }: Props) => {
  const handleSubmit = async (data: CreatePageFormModel) => {
    await onSubmit(data);
    toaster.push(message);
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

  return <CreatePageFormView form={form} handleSubmit={handleSubmit} />;
};

export default CreatePageFormLogic;
