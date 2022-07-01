/* eslint-disable require-jsdoc */
import { ActionIcon } from "@mantine/core";
import router from "next/router";
import React from "react";
import { Edit } from "tabler-icons-react";

interface Props {
  postId: string;
}

const PageEditButton = ({ postId }: Props) => {
  return (
    <ActionIcon
      color="blue"
      variant="light"
      onClick={() => {
        router.push(`pages/edit/${postId}`);
      }}
    >
      <Edit size={16} />
    </ActionIcon>
  );
};

export default PageEditButton;
