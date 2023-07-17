import React from "react";
import Tbody from "../../TableComponents/Tbody";
import TableBodyRow from "./TableBodyRow";
import { useGenerationStore } from "../../Zustand/store";

const PemTableBody = () => {
  const { isCreateMode } = useGenerationStore();
  return (
    <Tbody>
      <TableBodyRow />
      {isCreateMode && <TableBodyRow />}
    </Tbody>
  );
};

export default PemTableBody;
