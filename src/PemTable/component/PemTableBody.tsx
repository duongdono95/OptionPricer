import React from "react";
import Tbody from "../../TableComponents/Tbody";
import TableBodyRow from "./TableBodyRow";

const PemTableBody = () => {
  return (
    <Tbody>
      <TableBodyRow />
      <TableBodyRow />
      <TableBodyRow />
      <TableBodyRow />
      <TableBodyRow isCreateMode={true} />
    </Tbody>
  );
};

export default PemTableBody;
