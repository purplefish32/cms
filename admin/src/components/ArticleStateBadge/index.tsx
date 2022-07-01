/* eslint-disable require-jsdoc */
import { Badge } from "@mantine/core";
import React from "react";
import { ArticleStatesEnum } from "../../../generated/graphql";

interface Props {
  state?: ArticleStatesEnum;
}

export function ArticleStateBadge({ state }: Props) {
  switch (state) {
    case ArticleStatesEnum.Archived:
      return (
        <Badge color="grey" variant="light">
          Archived
        </Badge>
      );
    case ArticleStatesEnum.Draft:
      return (
        <Badge color="yellow" variant="light">
          Draft
        </Badge>
      );
    case ArticleStatesEnum.Published:
      return (
        <Badge color="green" variant="light">
          Published
        </Badge>
      );
    default:
      return <Badge variant="light">Unknown</Badge>;
  }
}
