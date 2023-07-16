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

interface TableBodyRowProps {
  isCreateMode?: Boolean;
}
const X = 50;
const K = 50;
const plusOneYear = new Date().setFullYear(new Date().getFullYear() + 1);
const lessOneDay = new Date(plusOneYear).setDate(
  new Date(plusOneYear).getDate() - 1
);
const d = new Date(lessOneDay);
const t = new Date(d).toISOString().split("T")[0];
const r = 0.01;
const q = 0.01;
const s = 0.2;
const type = OptionType.PUT;

const TableBodyRow: React.FC<TableBodyRowProps> = ({ isCreateMode }) => {
  const [setProp, optionProps] = useOptionModel({
    optionType: type,
    underlyingPrice: X,
    strikePrice: K,
    expiryDate: "2023-12-31",
    riskFreeRate: 0,
    dividendYield: 0,
    impliedVolatility: s,
  });
  // console.log(optionProps);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProp("impliedVolatility", Math.random() * (1 - 0.01) + 0.01);
    }, 5000);
    return () => void clearInterval(timer);
  }, []);
  return (
    <Tr isCategories>
      <Td>
        <CheckBox />
      </Td>
      <Td>{optionProps?.expiryDate}</Td>
      <Td>
        <HighlightedData role="Buy" tradedValue={10} />
      </Td>
      <Td>
        <SwitchButton type={"P"} />
      </Td>
      <Td title={optionProps?.optionPrice.toString()}>
        {isCreateMode && isCreateMode ? (
          <InputComponent />
        ) : (
          numDataConverter(optionProps?.optionPrice)
        )}
      </Td>
      <Td>
        <InputComponent defaultValue={100} />
      </Td>
      <Td>
        {isCreateMode && isCreateMode ? (
          <InputComponent />
        ) : (
          numDataConverter(optionProps?.strikePrice)
        )}
      </Td>
      <Td>
        {isCreateMode && isCreateMode ? (
          <InputComponent />
        ) : (
          numDataConverter(optionProps?.underlyingPrice)
        )}
      </Td>
      <Td>{isCreateMode && isCreateMode ? <InputComponent /> : "Data"}</Td>
      <Td>
        {isCreateMode && isCreateMode ? (
          <InputComponent />
        ) : (
          numDataConverter(optionProps?.greeks[optionProps.optionType].delta)
        )}
      </Td>
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
