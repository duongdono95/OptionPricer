import React, { useState } from "react";
import Tbody from "../../TableComponents/Tbody";
import TableBodyRow from "./TableBodyRow";
import TableCreateRow from "./TableCreateRow";
import Tr from "../../TableComponents/Tr";
import Td from "../../TableComponents/Td";
import { EmptyDataRow } from "../../types/constant";
import { OPTableButtons } from "../../components/OPTableButtons/OPTableButtons";
import { OPTableStore } from "../../Zustand/OPTableStore";

const OptionPricerTableBody: React.FC = () => {
  const [isCreateMode, setIsCreateMode, tableRowDataArr, setTableRowDataArr] =
    OPTableStore((state) => [
      state.isCreateMode,
      state.setIsCreateMode,
      state.tableRowDataArr,
      state.setTableRowDataArr,
    ]);

  const [createRow, setCreateRow] = useState(EmptyDataRow);
  const handleOpenCreateMode = () => {
    setIsCreateMode(true);
  };
  const handleCancel = () => {
    setCreateRow(EmptyDataRow);
    setIsCreateMode(false);
  };
  const handlePostNewRow = () => {
    setCreateRow(EmptyDataRow);
    setTableRowDataArr(createRow);
    setIsCreateMode(false);
  };

  return (
    <Tbody>
      {tableRowDataArr.map((rowData, index) => {
        return <TableBodyRow key={index} rowData={rowData} />;
      })}
      <TableCreateRow
        createRow={createRow}
        setCreateRow={setCreateRow}
        isCreateMode={isCreateMode}
      />
      <Tr>
        <Td colSpan={20}>
          {!isCreateMode && (
            <div onClick={() => handleOpenCreateMode()}>
              <OPTableButtons.Create />
            </div>
          )}
          {isCreateMode && (
            <div className="new-row-btns">
              <div onClick={() => handleCancel()}>
                <OPTableButtons.Cancel />
              </div>
              <div onClick={() => handlePostNewRow()}>
                <OPTableButtons.Post />
              </div>
            </div>
          )}
        </Td>
        {/* <Td></Td> */}
      </Tr>
    </Tbody>
  );
};

export default OptionPricerTableBody;
