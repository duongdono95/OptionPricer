import React, { useState } from "react";
import CheckBox from "../../../../../components/CheckBox/CheckBox";
import { useEffect } from "react";
import { WCPageStore } from "../../../../../Zustand/CalendarStore";
import { createSelectedMonthArr } from "../../../../../libs/hooks/hooks";
import { selectedMonthsArr } from "../../../../../libs/types/GeneralTypes";

interface WCRowMonth {
  rowMonth: {
    value: number;
    month: string;
  };
  rowYear: number;
}
type monthsArrType = selectedMonthsArr;
const WCRowMonth = ({ rowMonth, rowYear }: WCRowMonth) => {
  const [today, startTime, endTime] = WCPageStore((state) => [
    state.today,
    state.startTime,
    state.endTime,
  ]);

  const [isSelectedRow, setIsSelectedRow] = useState(false);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    if (rowYear <= today.year) {
      if (today.month <= rowMonth.value) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
    if (startTime && endTime) {
      const monthsArr: monthsArrType = createSelectedMonthArr(
        startTime,
        endTime
      );
      monthsArr?.forEach((item) => {
        if (rowYear === item.year) {
          item.months.forEach((month) => {
            if (month === rowMonth.value) {
              setIsSelectedRow(!isSelectedRow);
            }
          });
        }
      });
    }
  }, [rowYear, startTime, endTime]);
  return (
    <div className={isActive ? "month" : "month inactive noselect"}>
      <CheckBox isActive={isActive} isSelected={isSelectedRow} />
      <p className="noselect">{rowMonth.month}</p>
    </div>
  );
};

export default WCRowMonth;
