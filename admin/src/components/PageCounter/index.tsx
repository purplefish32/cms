import { FunctionComponent } from "react";
import { PageStatesEnum, usePagesAggregateQuery, } from "../../../generated/graphql";

interface Props {
    state?: PageStatesEnum
}

const PageCounter: FunctionComponent<Props> = (props) => {
    const { state } = props;
    const { data, error } = usePagesAggregateQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            where: {
                state: {
                    _eq: state
                }
            }
        }
    });

    if (error) {
        return <div>Error loading page count.</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    return (
        <span>{data.pages_aggregate.aggregate.count}</span>
    )
}

export default PageCounter