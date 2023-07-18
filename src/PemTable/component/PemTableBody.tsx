import React from "react";
import Tbody from "../../TableComponents/Tbody";
import TableBodyRow from "./TableBodyRow";
import { zustandStore } from "../../Zustand/store";

const PemTableBody = () => {
  const { isCreateMode } = zustandStore();
  return (
    <Tbody>
      <TableBodyRow />
      {isCreateMode && <TableBodyRow />}
    </Tbody>
  );
};

export default PemTableBody;
