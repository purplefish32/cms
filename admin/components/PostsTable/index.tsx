import { FunctionComponent } from "react";
import { usePostsTableQuery } from "../../generated/graphql"

const PostsTable: FunctionComponent = () => {
    const { data, loading, error } = usePostsTableQuery({
        fetchPolicy: "cache-and-network"
    });

    if (error) {
        return <div>Error loading posts.</div>;
    }

    if (loading && !data) {
        return <div>Loading</div>;
    }

    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th>{data.posts_aggregate.aggregate.count} POSTS</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.posts.map(
                        (post, key) => (
                            <tr key={key}>
                                <td>
                                    {post.title}
                                </td>
                                <td>
                                    {post.slug}
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default PostsTable