import React, { useState } from "react";
import CheckBox from "../../../../../components/CheckBox/CheckBox";
import { useEffect } from "react";
import { WCPageStore } from "../../../../../Zustand/CalendarStore";

interface WCRowMonth {
  rowMonth: {
    value: number;
    month: string;
  };
  rowYear: number;
  isSelectedMonth: boolean | undefined;
}
const WCRowMonth = ({ rowMonth, rowYear, isSelectedMonth }: WCRowMonth) => {
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
  }, [rowYear, startTime, endTime]);
  return (
    <div className={isActive ? "month" : "month inactive noselect"}>
      <CheckBox isActive={isActive} isSelected={isSelectedMonth} />
      <p className="noselect">{rowMonth.month}</p>
    </div>
  );
};

export default WCRowMonth;
