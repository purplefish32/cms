import { useState } from "react";
import { usePostsDeleteMutation } from "../../generated/graphql";
import { namedOperations } from "../../types";
import { Button } from 'rsuite';

function PageDeleteButton({ postId }) {

    const [postsDelete, { loading }] = usePostsDeleteMutation({
        refetchQueries: [
            namedOperations.Query.PagesTable,
            namedOperations.Query.PostCounter
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
                        variables: { id: postId }
                    });
                }
            }>Delete</Button>
    )
}

export default PageDeleteButton