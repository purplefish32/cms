/* eslint-disable camelcase */
import { LoadingOverlay, Table } from "@mantine/core";
import React, { FunctionComponent } from "react";
import {
  TaxonomiesEnum,
  useTermTaxonomiesQuery,
} from "../../../generated/graphql";

type Props = {
  taxonomy: TaxonomiesEnum;
};

const TermTaxonomiesTable: FunctionComponent<Props> = (props) => {
  const { taxonomy } = props;

  const { data, loading } = useTermTaxonomiesQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      where: {
        taxonomy: {
          _eq: taxonomy,
        },
      },
    },
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
          </tr>
        </thead>
        <tbody>
          {data?.termTaxonomies.map((termTaxonomy, key) => {
            return (
              <tr key={key}>
                <td>{termTaxonomy.term.name}</td>
                <td>{termTaxonomy.description}</td>
                <td>{termTaxonomy.term.slug}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TermTaxonomiesTable;
