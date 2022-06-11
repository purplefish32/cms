/* eslint-disable camelcase */
import { Table } from "@mantine/core";
import React, { FunctionComponent } from "react";
import { useTagsTableQuery } from "../../../generated/graphql";

const TagsTable: FunctionComponent = () => {
  const { data, error } = useTagsTableQuery({
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    console.error(error);
    return <div>Error loading tags.</div>;
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
        {data.summaryTaxonomies.map((summaryTaxonomies, key) => {
          return (
            <tr key={key}>
              <td>{summaryTaxonomies.name}</td>
              <td>{summaryTaxonomies.description}</td>
              <td>{summaryTaxonomies.slug}</td>
              <td>{summaryTaxonomies.count}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TagsTable;
