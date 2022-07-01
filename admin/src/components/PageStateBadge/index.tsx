/* eslint-disable require-jsdoc */
import { Badge } from "@mantine/core";
import React from "react";
import { PageStatesEnum } from "../../../generated/graphql";

interface Props {
  state?: PageStatesEnum;
}

export function PageStateBadge({ state }: Props) {
  switch (state) {
    case PageStatesEnum.Draft:
      return (
        <Badge color="yellow" variant="light">
          Draft
        </Badge>
      );
    case PageStatesEnum.Published:
      return (
        <Badge color="green" variant="light">
          Published
        </Badge>
      );
    default:
      return <Badge variant="light">Unknown</Badge>;
  }
}
