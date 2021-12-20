import { FunctionComponent } from "react";
import { PostStatesEnum, PostTypesEnum, usePostsAggregateQuery } from "../../../generated/graphql";

interface Props {
    type?: PostTypesEnum
    state?: PostStatesEnum
}

const PostStateCounter: FunctionComponent<Props> = (props) => {
    const { type, state } = props;
    const { data, error } = usePostsAggregateQuery({
        fetchPolicy: "cache-and-network",
        variables: {
            where: {
                _and: [
                    {
                        type: {
                            _eq: type
                        }
                    },
                    {
                        state: {
                            _eq: state
                        }
                    }
                ]
            }
        }
    });

    if (error) {
        return <div>Error loading posts.</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    return (
        <span>{data.posts_aggregate.aggregate.count}</span>
    )
}

export default PostStateCounter