import React, { useState } from "react";
import Tbody from "../../../../DynamicTable/Tbody";
import TableBodyRow from "./TableBodyRow";
import TableCreateRow from "./TableCreateRow";
import Tr from "../../../../DynamicTable/Tr";
import Td from "../../../../DynamicTable/Td";
import { EmptyDataRow } from "../../../../libs/types/constant";
import { OPTableButtons } from "../../../../components/OPTableButtons/OPTableButtons";
import { OPTableStore } from "../../../../Zustand/OPTableStore";

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
      <Tr className="row-btns">
        <Td colSpan={21}>
          {!isCreateMode && (
            <OPTableButtons.Create
              // isLoading={true}
              onClick={() => handleOpenCreateMode()}
            />
          )}
          {isCreateMode && (
            <div className="new-row-btns">
              <OPTableButtons.Cancel onClick={() => handleCancel()} />
              <OPTableButtons.Post onClick={() => handlePostNewRow()} />
            </div>
          )}
        </Td>
      </Tr>
    </Tbody>
  );
};

export default OptionPricerTableBody;
