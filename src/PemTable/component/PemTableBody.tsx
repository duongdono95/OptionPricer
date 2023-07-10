import React from "react";
import Tbody from "../../TableComponents/Tbody";
import TableBodyRow from "./TableBodyRow";
import useTableContext from "../../TableComponents/TableProvider";

const PemTableBody = () => {
  const { isCreateMode } = useTableContext();
  return (
    <Tbody>
      <TableBodyRow />
      <TableBodyRow />
      <TableBodyRow />
      <TableBodyRow />
      {isCreateMode && <TableBodyRow isCreateMode={isCreateMode} />}
    </Tbody>
  );
};

export default PemTableBody;
