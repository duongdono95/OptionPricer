import React from "react";
import Tr from "../../TableComponents/Tr";
import Td from "../../TableComponents/Td";
import CheckBox from "../../components/CheckBox/CheckBox";
import HighlightedData from "../../components/HighlightedData/HighlightedData";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useOptionModel } from "../../components/useOptionModel";
import { OptionType } from "@pantheon-tech/bsm-optionmodel";
import { numDataConverter } from "../../helpers/helper";
import { zustandStore } from "../../Zustand/store";
import DataCell from "./DataCell";

const TableBodyRow = () => {
  const { isCreateMode } = zustandStore();

  return (
    <Tr isCategories>
      <DataCell type="checkbox" />
      <DataCell type="exp-date" />
      <DataCell type="buy/sell" />
      <DataCell type="call/put" />
      <DataCell type="Price(/lot)" />
      <DataCell type="cost" />
      <DataCell type="strike" />
      <DataCell type="underlying" />
      <DataCell type="hours" />
      <DataCell type="delta" />
      <DataCell type="theta" />
      <DataCell type="vega" />
      <DataCell type="premium" />
      <DataCell type="underlying" />
      <DataCell type="strike" />
      <DataCell type="volatility" />
      <DataCell type="interest rate" />
      <DataCell type="dividendYield" />
      <DataCell type="day to exp" />
      <DataCell type="year to exp" />
    </Tr>
  );
};

export default TableBodyRow;
