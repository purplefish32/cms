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
        {data.term_taxonomies.map((term_taxonomy, key) => {
          return (
            <tr key={key}>
              <td>{term_taxonomy.term.name}</td>
              <td>{term_taxonomy.description}</td>
              <td>{term_taxonomy.term.slug}</td>
              <td>
                {term_taxonomy.term_relationships_aggregate.aggregate?.count}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TagsTable;
