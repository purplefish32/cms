import { useDeletePostMutation } from "../../../generated/graphql";
import { namedOperations } from "../../../types";
import { Button } from 'rsuite';

function PageDeleteButton({ postId }) {

    const [postsDelete, { loading }] = useDeletePostMutation({
        refetchQueries: [
            namedOperations.Query.posts,
            namedOperations.Query.postsAggregate
        ]
    })

    return (
        <Button
            size="xs"
            loading={loading}
            color="red"
            appearance="primary"
            onClick={
                async (event) => {
                    await postsDelete({
                        variables: {
                            where: {
                                id: {
                                    _eq: postId
                                }
                            }
                        }
                    });
                }
            }>Delete</Button>
    )
}

export default PageDeleteButton