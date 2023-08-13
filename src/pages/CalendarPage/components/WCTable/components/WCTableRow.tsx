import React, { useState } from "react";
import Tr from "../../../../../DynamicTable/Tr";
import Td from "../../../../../DynamicTable/Td";
import WCRowMonth from "./WCRowMonth";
import { WCPageStore } from "../../../../../Zustand/CalendarStore";

interface WCTableRowProps {
  row: {
    quarter: number;
    months: {
      value: number;
      month: string;
    }[];
    season: string;
  };
  rowYear: number;
  rowIndex: number;
}

const WCTableRow = ({ row, rowYear, rowIndex }: WCTableRowProps) => {
  const [today] = WCPageStore((state) => [state.today]);
  const currentQuarter = today.quarter;
  const currentYear = today.year;
  return (
    <Tr>
      <Td className="months-container">
        <div className="months">
          <WCRowMonth rowMonth={row.months[0]} rowYear={rowYear} />
          <WCRowMonth rowMonth={row.months[1]} rowYear={rowYear} />
          <WCRowMonth rowMonth={row.months[2]} rowYear={rowYear} />
        </div>
      </Td>
      <Td
        className={
          currentYear === rowYear && row.quarter < currentQuarter
            ? "quarter inactive noselect"
            : `quarter quarter-${row.quarter}`
        }
      >
        <p>{row.quarter}</p>
      </Td>
      <Td
        className={
          currentYear === rowYear && row.quarter < currentQuarter
            ? "season inactive"
            : `season season-${row.season.toLowerCase()}`
        }
      >
        {row.season}
      </Td>
      {rowIndex === 0 && (
        <Td
          className={currentYear > rowYear ? "year inactive" : "year"}
          rowSpan={4}
        >
          <p>{rowYear}</p>
        </Td>
      )}
    </Tr>
  );
};

export default WCTableRow;
