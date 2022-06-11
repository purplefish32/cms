/* eslint-disable camelcase */
import { Table } from "@mantine/core";
import React, { FunctionComponent } from "react";
import { useTagsTableQuery } from "../../../generated/graphql";

const TagsTable: FunctionComponent = () => {
  const { data, error } = useTagsTableQuery({
    fetchPolicy: "cache-and-network",
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
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {data.termTaxonomies.map((termTaxonomy, key) => {
          return (
            <tr key={key}>
              <td>{termTaxonomy.term.name}</td>
              <td>{termTaxonomy.description}</td>
              <td>{termTaxonomy.term.slug}</td>
              <td>
                {termTaxonomy.termRelationships_aggregate.aggregate?.count}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TagsTable;
