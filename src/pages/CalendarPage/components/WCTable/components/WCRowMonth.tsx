import React, { useState } from "react";
import CheckBox from "../../../../../components/CheckBox/CheckBox";
import { useEffect } from "react";
import { WCPageStore } from "../../../../../Zustand/CalendarStore";
import { createSelectedMonthArr } from "../../../../../libs/hooks/hooks";

interface WCRowMonth {
  item: {
    value: number;
    month: string;
  };
  rowYear: number;
}
const WCRowMonth = ({ item, rowYear }: WCRowMonth) => {
  const [today, startTime, endTime] = WCPageStore((state) => [
    state.today,
    state.startTime,
    state.endTime,
  ]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (rowYear <= today.year) {
      if (today.month <= item.value) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [rowYear]);
  useEffect(() => {
    if (startTime && endTime) {
      const test = createSelectedMonthArr(startTime, endTime);
      console.log(test);
    }
  }, [startTime, endTime]);
  return (
    <div className={isActive ? "month" : "month inactive noselect"}>
      <div>
        <CheckBox isActive={isActive} />
      </div>
      <p>{item.month}</p>
    </div>
  );
};

export default WCRowMonth;
