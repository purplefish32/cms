
import { FunctionComponent } from "react";
import { TaxonomiesEnum, useTermTaxonomiesTableQuery } from "../../generated/graphql";
import { Table } from "semantic-ui-react";

const TermTaxonomiesTable: FunctionComponent = () => {
    const { data, error } = useTermTaxonomiesTableQuery({
        fetchPolicy: "cache-and-network",
        variables:
        {
            where: {
                taxonomy: {
                    _eq: TaxonomiesEnum.Categories
                }
            }

        }
    });

    if (error) {
        return <div>Error loading pages.</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Slug</Table.HeaderCell>
                    <Table.HeaderCell>Count</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    data.term_taxonomies.map((term_taxonomy, key) => {
                        return (
                            <Table.Row key={key}>
                                <Table.Cell>{term_taxonomy.term.name}</Table.Cell>
                                <Table.Cell>{term_taxonomy.description}</Table.Cell>
                                <Table.Cell>{term_taxonomy.term.slug}</Table.Cell>
                                <Table.Cell>X // TODO</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    )
}

export default TermTaxonomiesTable