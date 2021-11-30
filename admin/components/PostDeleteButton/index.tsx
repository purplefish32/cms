import { useState } from "react";
import { Button, SemanticCOLORS } from "semantic-ui-react";
import { usePostsDeleteMutation } from "../../generated/graphql";
import { namedOperations } from "../../types";

function PostDeleteButton({ postId }) {
    const [text, setText] = useState("Delete");
    const [color, setColor] = useState<SemanticCOLORS>("red");

    const [postsDelete, { loading }] = usePostsDeleteMutation({
        refetchQueries: [
            namedOperations.Query.PostsTable,
            namedOperations.Query.PostCounter
        ]
    })

    return (
        <Button
            loading={loading}
            color={color}
            onClick={
                async (event) => {
                    await postsDelete({
                        variables: { id: postId }
                    });
                    setText("OK")
                    setColor("green")
                }
            }>{text}</Button>
    )
}

export default PostDeleteButton