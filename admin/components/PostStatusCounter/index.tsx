import { FunctionComponent } from "react";
import { PostStatusEnum, PostTypesEnum, usePostCounterQuery } from "../../generated/graphql";

interface Props {
    type?: PostTypesEnum
    status?: PostStatusEnum
}

const PostStatusCounter: FunctionComponent<Props> = (props) => {
    const { type, status } = props;
    const { data, error } = usePostCounterQuery({
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
                        status: {
                            _eq: status
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

export default PostStatusCounter