import { OptionProperties, OptionType } from "@pantheon-tech/bsm-optionmodel";
import React, { useState } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";
import HighlightedData from "../../components/HighlightedData/HighlightedData";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import { numDataConverter } from "../../helpers/helper";
import Td from "../../TableComponents/Td";
import Tr from "../../TableComponents/Tr";
import OptionExpDate from "../../components/OptionExpDate/OptionExpDate";

const TableBodyRow = ({ rowData }: { rowData: OptionProperties }) => {
  const [optionType, setOptionType] = useState<
    OptionType.PUT | OptionType.CALL
  >(OptionType.PUT);
  return (
    <Tr isCategories>
      <Td title="check box">
        <CheckBox />
      </Td>
      <Td title="Exp Date">
        <OptionExpDate />
      </Td>
      <Td title="Buy/Sell">
        <HighlightedData role="Buy" tradedValue={10} />
      </Td>
      <Td highlighted title="Call/Put">
        <SwitchButton optionType={optionType} setOptionType={setOptionType} />
      </Td>
      <Td title="Price(/lot)">{numDataConverter(rowData.optionPrice)}</Td>
      <Td title="Cost">
        <input defaultValue={100} />
      </Td>
      <Td highlighted title="Strike">
        {numDataConverter(rowData.strikePrice)}
      </Td>
      <Td title="Underlying">{numDataConverter(rowData.underlyingPrice)}</Td>
      <Td title="Hours">
        <p>10</p>
      </Td>
      <Td title="Delta">
        {numDataConverter(rowData?.greeks[optionType].delta)}
      </Td>
      <Td title="Theta">
        {numDataConverter(rowData?.greeks[optionType].theta)}
      </Td>
      <Td title="Vega">{numDataConverter(rowData.greeks[optionType].vega)}</Td>
      <Td title="Premium">
        <p>0</p>
      </Td>
      <Td title="Underlying">{numDataConverter(rowData.underlyingPrice)}</Td>
      <Td title="Strike">{numDataConverter(rowData.strikePrice)}</Td>
      <Td highlighted title="volatility">
        {numDataConverter(rowData.impliedVolatility)}
      </Td>
      <Td title="Interest rate">{numDataConverter(rowData.riskFreeRate)}</Td>
      <Td title="Dividend Yield">{numDataConverter(rowData.dividendYield)}</Td>
      <Td title="Day to Expire">
        <p>{rowData.daysToExpiry} days</p>
      </Td>
      <Td title="Year to Expire">{numDataConverter(rowData.yearsToExpiry)}</Td>
      {/* <Td></Td> */}
    </Tr>
  );
};

export default TableBodyRow;
