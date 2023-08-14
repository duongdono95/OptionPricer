import { OptionProperties, OptionType } from "@pantheon-tech/bsm-optionmodel";
import React, { useState } from "react";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import Td from "../../../../DynamicTable/Td";
import Tr from "../../../../DynamicTable/Tr";
import OPDateSelection from "./OPDateSelection/OPDateSelection";
import InputComponent from "../../../../components/InputComponent/InputComponent";
import Switch2Options from "../../../../components/Switch2Options/Switch2Options";
import { CallPutConstants } from "../../../../libs/types/constant";

interface TableCreateRowProps {
  isCreateMode: boolean;
  createRow: OptionProperties;
  setCreateRow: React.Dispatch<React.SetStateAction<OptionProperties>>;
}

const TableCreateRow: React.FC<TableCreateRowProps> = ({
  createRow,
  setCreateRow,
  isCreateMode,
}) => {
  const [optionType, setOptionType] = useState<
    OptionType.PUT | OptionType.CALL
  >(OptionType.PUT);
  return (
    <Tr className={isCreateMode ? "" : "create-row-hide"}>
      <Td title="check box">
        <CheckBox />
      </Td>
      <Td title="Exp Date">
        <OPDateSelection />
      </Td>
      <Td title="Buy/Sell">
        <p>0</p>
      </Td>
      <Td highlighted title="Call/Put">
        {/* <SwitchButton optionType={optionType} setOptionType={setOptionType} /> */}
        <Switch2Options options={CallPutConstants} />
      </Td>
      <Td title="Price(/lot)">
        <p>0</p>
      </Td>
      <Td title="Cost">
        <p>0</p>
      </Td>
      <Td highlighted title="Strike">
        <InputComponent
          type="number"
          value={createRow.strikePrice}
          onChange={(e) =>
            setCreateRow({
              ...createRow,
              strikePrice: parseInt(e.target.value),
            })
          }
        />
      </Td>
      <Td title="Underlying">
        <p>0</p>
      </Td>
      <Td title="Hours">
        <p>0</p>
      </Td>
      <Td title="Delta">
        <p>0</p>
      </Td>
      <Td title="Theta">
        <p>0</p>
      </Td>
      <Td title="Vega">
        <p>0</p>
      </Td>
      <Td title="Premium">
        <p>0</p>
      </Td>
      <Td title="Underlying">
        <p>0</p>
      </Td>
      <Td title="Strike">
        <p>0</p>
      </Td>
      <Td highlighted title="volatility">
        <InputComponent
          type="number"
          value={createRow.impliedVolatility}
          onChange={(e) =>
            setCreateRow({
              ...createRow,
              impliedVolatility: parseInt(e.target.value),
            })
          }
        />
      </Td>
      <Td title="Interest rate">
        <p>0</p>
      </Td>
      <Td title="Dividend Yield">
        <p>0</p>
      </Td>
      <Td title="Day to Expire">
        <p>0</p>
      </Td>
      <Td title="Year to Expire">
        <p>0</p>
      </Td>
      <Td>
        <p></p>
      </Td>
    </Tr>
  );
};

export default TableCreateRow;
