import React from "react";
import Tbody from "../../../../../DynamicTable/Tbody";
import WCTableRow from "./WCTableRow";
import { WCYearDetail } from "../../../../../libs/types/constant";
import dayjs from "dayjs";

interface WCTableBodyProps {
  year: number;
}

const WCTableBody = ({ year }: WCTableBodyProps) => {
  const today = dayjs();
  return (
    <Tbody className="wc-table-year">
      {WCYearDetail.map((row, index) => {
        return (
          <WCTableRow key={index} row={row} rowYear={year} rowIndex={index} />
        );
      })}
    </Tbody>
  );
};

export default WCTableBody;
