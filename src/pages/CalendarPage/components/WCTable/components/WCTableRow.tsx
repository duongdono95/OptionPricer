import React, { useState, useEffect } from "react";
import Tr from "../../../../../DynamicTable/Tr";
import Td from "../../../../../DynamicTable/Td";
import WCRowMonth from "./WCRowMonth";
import { WCPageStore } from "../../../../../Zustand/CalendarStore";
import { monthsArrType } from "../../../../../libs/types/GeneralTypes";
import { createSelectedMonthArr } from "../../../../../libs/hooks/hooks";

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
  const [today, startTime, endTime] = WCPageStore((state) => [
    state.today,
    state.startTime,
    state.endTime,
  ]);
  const [selectedMonths, setSelectedMonth] = useState<number[] | null>([]);
  useEffect(() => {
    if (startTime && endTime) {
      const monthsArr: monthsArrType[] | undefined = createSelectedMonthArr(
        startTime,
        endTime
      );
      monthsArr?.forEach((item) => {
        console.log(item.months);
        if (rowYear === item.year) {
          setSelectedMonth(item.months);
        }
      });
    }
  }, [startTime, endTime]);
  return (
    <Tr>
      <Td className="months-container">
        <div className="months">
          <WCRowMonth
            isSelectedMonth={selectedMonths?.includes(row.months[0].value)}
            rowMonth={row.months[0]}
            rowYear={rowYear}
          />
          <WCRowMonth
            isSelectedMonth={selectedMonths?.includes(row.months[1].value)}
            rowMonth={row.months[1]}
            rowYear={rowYear}
          />
          <WCRowMonth
            isSelectedMonth={selectedMonths?.includes(row.months[2].value)}
            rowMonth={row.months[2]}
            rowYear={rowYear}
          />
        </div>
      </Td>
      <Td
        className={
          today.year === rowYear && row.quarter < today.quarter
            ? "quarter inactive noselect"
            : `quarter quarter-${row.season.toLowerCase()}`
        }
      >
        <p>{row.quarter}</p>
      </Td>
      <Td
        className={
          today.year === rowYear && row.quarter < today.quarter
            ? "season inactive"
            : `season season-${row.season.toLowerCase()}`
        }
      >
        {row.season}
      </Td>
      {rowIndex === 0 && (
        <Td
          className={today.year > rowYear ? "year inactive" : "year"}
          rowSpan={4}
        >
          <p>{rowYear}</p>
        </Td>
      )}
    </Tr>
  );
};

export default WCTableRow;
