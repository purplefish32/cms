/* eslint-disable camelcase */
import { LoadingOverlay, Table } from "@mantine/core";
import React, { FunctionComponent } from "react";
import { useTagsTableQuery } from "../../../generated/graphql";

const TagsTable: FunctionComponent = () => {
  const { data, loading } = useTagsTableQuery({
    fetchPolicy: "cache-and-network",
  });

  return (
    <>
      <LoadingOverlay visible={!data && loading}></LoadingOverlay>
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
          {data?.summaryTaxonomies.map((summaryTaxonomies, key) => {
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
    </>
  );
};

export default TagsTable;
