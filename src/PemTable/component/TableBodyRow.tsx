import React from "react";
import Tr from "../../TableComponents/Tr";
import Td from "../../TableComponents/Td";
import CheckBox from "../../components/CheckBox/CheckBox";
import HighlightedData from "../../components/HighlightedData/HighlightedData";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import InputComponent from "../../components/InputComponent/InputComponent";

interface TableBodyRowProps {
  isCreateMode?: Boolean;
}

const TableBodyRow: React.FC<TableBodyRowProps> = ({ isCreateMode }) => {
  return (
    <Tr isCategories>
      <Td>
        <CheckBox />
      </Td>
      <Td>30/06/23</Td>
      <Td>
        <HighlightedData role="Buy" tradedValue={10} />
      </Td>
      <Td>
        <SwitchButton />
      </Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>
        <InputComponent defaultValue={100} />
      </Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>
        <InputComponent />
      </Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
    </Tr>
  );
};

export default TableBodyRow;
