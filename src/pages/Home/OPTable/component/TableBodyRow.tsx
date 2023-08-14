import { OptionProperties, OptionType } from "@pantheon-tech/bsm-optionmodel";
import React, { useState } from "react";
import CheckBox from "../../../../components/CheckBox/CheckBox";
import HighlightedData from "./HighlightedData/HighlightedData";
import { numDataConverter } from "../../../../libs/hooks/hooks";
import Td from "../../../../DynamicTable/Td";
import Tr from "../../../../DynamicTable/Tr";
import OPDateSelection from "./OPDateSelection/OPDateSelection";
import { OPTableButtons } from "../../../../components/OPTableButtons/OPTableButtons";
import Tippy from "@tippyjs/react/headless";
import TippySlider from "../../../../components/TippySlider/TippySlider";
import Switch2Options from "../../../../components/Switch2Options/Switch2Options";
import { CallPutConstants } from "../../../../libs/types/constant";

const TableBodyRow = ({ rowData }: { rowData: OptionProperties }) => {
  const [optionType, setOptionType] = useState<
    OptionType.PUT | OptionType.CALL
  >(OptionType.PUT);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Tr isCategories>
      <Td title="check box">
        <CheckBox />
      </Td>
      <Td title="Exp Date">
        <OPDateSelection />
      </Td>
      <Td title="Buy/Sell">
        <HighlightedData role="Buy" tradedValue={10} />
      </Td>
      <Td highlighted title="Call/Put">
        <Switch2Options options={["Call", "Put"]} />
      </Td>
      <Td title="Price(/lot)">{numDataConverter(rowData.optionPrice)}</Td>
      <Td title="Cost">
        <p>{0}</p>
      </Td>
      <Td highlighted title="Strike">
        <input
          type="number"
          defaultValue={numDataConverter(rowData.strikePrice)}
        />
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
        <input
          type="number"
          defaultValue={numDataConverter(rowData.impliedVolatility)}
        />
      </Td>
      <Td title="Interest rate">{numDataConverter(rowData.riskFreeRate)}</Td>
      <Td title="Dividend Yield">{numDataConverter(rowData.dividendYield)}</Td>
      <Td title="Day to Expire">
        <p>{rowData.daysToExpiry} days</p>
      </Td>
      <Td title="Year to Expire">{numDataConverter(rowData.yearsToExpiry)}</Td>
      <Td>
        <Tippy
          placement="left"
          interactive
          trigger="click"
          offset={[0, 5]}
          animateFill
          render={(attrs) => (
            <div className="box" tabIndex={-1} {...attrs}>
              <TippySlider message="Confirm Deletion" />
            </div>
          )}
        >
          <div>
            <OPTableButtons.Delete />
          </div>
        </Tippy>
      </Td>
    </Tr>
  );
};

export default TableBodyRow;
