import React, { FunctionComponent } from "react";
import {
  ArticleStatesEnum,
  useArticlesAggregateQuery,
} from "../../../generated/graphql";

interface Props {
  state?: ArticleStatesEnum;
}

const ArticleCounter: FunctionComponent<Props> = (props) => {
  const { state } = props;
  const { data, error } = useArticlesAggregateQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      where: {
        state: {
          _eq: state,
        },
      },
    },
  });

  if (error) {
    return <div>Error loading article count.</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }

  return <span>{data.articles_aggregate.aggregate.count}</span>;
};

export default ArticleCounter;
