import { OptionType } from "@pantheon-tech/bsm-optionmodel";
import Checkbox from "rc-checkbox";
import React, { useState } from "react";
import HighlightedData from "../../components/HighlightedData/HighlightedData";
import InputComponent from "../../components/InputComponent/InputComponent";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import { GetOption } from "../../helpers/getOption";
import { numDataConverter } from "../../helpers/helper";
import Td from "../../TableComponents/Td";
import { zustandStore } from "../../Zustand/store";

type DataCellTypes =
  | "checkbox"
  | "exp-date"
  | "buy/sell"
  | "call/put"
  | "Price(/lot)"
  | "cost"
  | "strike"
  | "underlying"
  | "hours"
  | "delta"
  | "theta"
  | "vega"
  | "premium"
  | "volatility"
  | "day to exp"
  | "year to exp"
  | "interest rate"
  | "createMode"
  | "dividendYield";

type DataCellProps = {
  type?: DataCellTypes;
};

const DataCell: React.FC<DataCellProps> = ({ type }) => {
  const dataCellType = type ? type : "default";
  const optionProps = GetOption();

  const [initialOptionType] = zustandStore((state) => [
    state.initialOptionType,
  ]);
  console.log(optionProps);
  return (
    <Td>
      {dataCellType === "checkbox" && <Checkbox />}
      {dataCellType === "exp-date" &&
        optionProps?.expiryDate}
      {dataCellType === "buy/sell" && (
        <HighlightedData role="Buy" tradedValue={10} />
      )}
      {dataCellType === "call/put" && <SwitchButton />}
      {dataCellType === "Price(/lot)" &&
        numDataConverter(optionProps?.optionPrice)}
      {dataCellType === "cost" && (
        <InputComponent defaultValue={100} />
      )}
      {dataCellType === "strike" &&
        numDataConverter(optionProps?.strikePrice)}
      {dataCellType === "underlying" &&
        numDataConverter(optionProps?.underlyingPrice)}
      {dataCellType === "hours" && <p>10</p>}
      {dataCellType === "delta" &&
        numDataConverter(
          optionProps?.greeks[initialOptionType].delta
        )}
      {dataCellType === "theta" &&
        numDataConverter(
          optionProps?.greeks[initialOptionType].theta
        )}
      {dataCellType === "vega" &&
        numDataConverter(
          optionProps?.greeks[initialOptionType].vega
        )}
      {dataCellType === "premium" && <p>0</p>}
      {dataCellType === "volatility" &&
        numDataConverter(optionProps?.impliedVolatility)}
      {dataCellType === "interest rate" &&
        numDataConverter(optionProps?.riskFreeRate)}
      {dataCellType === "dividendYield" &&
        numDataConverter(optionProps?.dividendYield)}
      {dataCellType === "day to exp" && (
        <p>{optionProps?.daysToExpiry} days</p>
      )}
      {dataCellType === "year to exp" &&
        numDataConverter(optionProps?.yearsToExpiry)}
    </Td>
  );
};

export default DataCell;
