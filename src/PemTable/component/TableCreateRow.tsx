import { OptionType } from "@pantheon-tech/bsm-optionmodel";
import React, { useState } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";

import SwitchButton from "../../components/SwitchButton/SwitchButton";
import Td from "../../TableComponents/Td";
import Tr from "../../TableComponents/Tr";
import { EmptyDataRow } from "../../types/constant";
const TableCreateRow = () => {
  const [initialOption, setInitialOption] =
    useState(EmptyDataRow);
  const [optionType, setOptionType] = useState<
    OptionType.PUT | OptionType.CALL
  >(OptionType.PUT);

  return (
    <Tr isCategories>
      <Td title="check box">
        <CheckBox />
      </Td>
      <Td title="Exp Date">
        <input
          type="text"
          defaultValue={initialOption.expiryDate}
        />
      </Td>
      <Td title="Buy/Sell">
        <input defaultValue={0} />
      </Td>
      <Td title="Call/Put">
        <SwitchButton
          optionType={optionType}
          setOptionType={setOptionType}
        />
      </Td>
      <Td title="Price(/lot)">
        <input defaultValue={initialOption.optionPrice} />
      </Td>
      <Td title="Cost">
        <input defaultValue={0} />
      </Td>
      <Td title="Strike">
        <input defaultValue={0} />
      </Td>
      <Td title="Underlying">
        <input defaultValue={0} />
      </Td>
      <Td title="Hours">
        <input defaultValue={0} />
      </Td>
      <Td title="Delta">
        <input defaultValue={0} />
      </Td>
      <Td title="Theta">
        <input defaultValue={0} />
      </Td>
      <Td title="Vega">
        <input defaultValue={0} />
      </Td>
      <Td title="Premium">
        <p>0</p>
      </Td>
      <Td title="Underlying">
        <input defaultValue={0} />
      </Td>
      <Td title="Strike">
        <input defaultValue={0} />
      </Td>
      <Td title="volatility">
        <input defaultValue={0} />
      </Td>
      <Td title="Interest rate">
        <input defaultValue={0} />
      </Td>
      <Td title="Dividend Yield">
        <input defaultValue={0} />
      </Td>
      <Td title="Day to Expire">
        <input defaultValue={0} />
      </Td>
      <Td title="Year to Expire">
        <input defaultValue={0} />
      </Td>
    </Tr>
  );
};

export default TableCreateRow;
