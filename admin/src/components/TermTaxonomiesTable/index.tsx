/* eslint-disable camelcase */
import React, { FunctionComponent } from "react";
import { Table } from "semantic-ui-react";
import {
  TaxonomiesEnum,
  useTermTaxonomiesQuery,
} from "../../../generated/graphql";

type Props = {
  taxonomy: TaxonomiesEnum;
};

const TermTaxonomiesTable: FunctionComponent<Props> = (props) => {
  const { taxonomy } = props;

  const { data, error } = useTermTaxonomiesQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      where: {
        taxonomy: {
          _eq: taxonomy,
        },
      },
    },
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
        {data.term_taxonomies.map((term_taxonomy, key) => {
          return (
            <Table.Row key={key}>
              <Table.Cell>{term_taxonomy.term.name}</Table.Cell>
              <Table.Cell>{term_taxonomy.description}</Table.Cell>
              <Table.Cell>{term_taxonomy.term.slug}</Table.Cell>
              {/* <Table.Cell>{term_taxonomy.term.term_relationships_aggregate.aggregate.count}</Table.Cell> */}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TermTaxonomiesTable;
