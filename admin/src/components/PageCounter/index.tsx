import React, { FunctionComponent } from "react";
import {
  PageStatesEnum,
  usePagesAggregateQuery,
} from "../../../generated/graphql";

interface Props {
  state?: PageStatesEnum;
}

const PageCounter: FunctionComponent<Props> = (props) => {
  const { state } = props;
  const { data, loading } = usePagesAggregateQuery({
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

  return <>{data?.pagesAggregate?.aggregate?.count}</>;
};

export default PageCounter;
