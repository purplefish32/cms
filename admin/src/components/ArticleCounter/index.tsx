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
  const { data, loading } = useArticlesAggregateQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      where: {
        state: {
          _eq: state,
        },
      },
    },
  });

  if (!data && loading) {
    return <>?</>;
  }

  return <>{data?.articlesAggregate?.aggregate?.count}</>;
};

export default ArticleCounter;
