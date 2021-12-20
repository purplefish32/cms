import { gql, useQuery } from "@apollo/client";

export default function StaffTable() {

    const ALL_PLAYERS_QUERY = gql`
        query users {
            users {
                id
            }
        }
    `;

    const { loading, error, data } = useQuery(ALL_PLAYERS_QUERY);

    if (error) {
        return <div>Error loading players.</div>;
    }

    if (loading) {
        return <div>Loading</div>;
    }

    return (
        <>
            {
                data.users.map(
                    user => (
                        user.id
                    )
                )
            }
        </>
    )
}