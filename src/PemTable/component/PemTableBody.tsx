import React, { useEffect } from "react";
import Tbody from "../../TableComponents/Tbody";
import TableBodyRow from "./TableBodyRow";
import { zustandStore } from "../../Zustand/store";
import { GetOption } from "../../helpers/getOption";
import TableCreateRow from "./TableCreateRow";

const PemTableBody: React.FC = () => {
  const [
    isCreateMode,
    tableRowDataArr,
    setTableRowDataArr,
  ] = zustandStore((state) => [
    state.isCreateMode,
    state.tableRowDataArr,
    state.setTableRowDataArr,
  ]);
  const firstRow = GetOption();
  useEffect(() => {
    if (firstRow) {
      setTableRowDataArr(firstRow);
    }
  }, [firstRow]);
  console.log(tableRowDataArr);
  return (
    <Tbody>
      {tableRowDataArr.map((rowData, index) => {
        return (
          <TableBodyRow key={index} rowData={rowData} />
        );
      })}

      {isCreateMode && <TableCreateRow />}
    </Tbody>
  );
};

export default PemTableBody;
