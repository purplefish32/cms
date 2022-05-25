/* eslint-disable camelcase */
import { Table } from "@mantine/core";
import React, { FunctionComponent } from "react";
import {
  TaxonomiesEnum,
  useTermTaxonomiesQuery
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
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Slug</th>
        </tr>
      </thead>
      <tbody>
        {data.term_taxonomies.map((term_taxonomy, key) => {
          return (
            <tr key={key}>
              <td>{term_taxonomy.term.name}</td>
              <td>{term_taxonomy.description}</td>
              <td>{term_taxonomy.term.slug}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TermTaxonomiesTable;
