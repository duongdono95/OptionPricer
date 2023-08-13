import { DatePicker, Space } from "antd";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { OPTimePickerOptionsType } from "../../../../libs/types/GeneralTypes";
import { RangeValue } from "rc-picker/lib/interface";
import { calculateTimeDifference } from "../../../../libs/hooks/hooks";
import { WCPageStore } from "../../../../Zustand/CalendarStore";

interface WCTimeRangeProps {
  rangeType: OPTimePickerOptionsType;
  setTimeDifference: React.Dispatch<any>;
}

const WCTimeRange: React.FC<WCTimeRangeProps> = ({
  rangeType,
  setTimeDifference,
}) => {
  const [startTime, endTime, setStartTime, setEndTime] = WCPageStore(
    (state) => [
      state.startTime,
      state.endTime,
      state.setStartTime,
      state.setEndTime,
    ]
  );
  const { RangePicker } = DatePicker;

  const handleSelection = (
    values: RangeValue<Dayjs>
    // formatString: [string, string]
  ) => {
    setStartTime(null);
    setEndTime(null);
    setTimeDifference(0);
    const difference = calculateTimeDifference(values, rangeType);
    setTimeDifference(difference);
    if (values && values[0] && values[1]) {
      setStartTime(values[0]);
      setEndTime(values[1]);
    }
  };

  return (
    <Space direction={"vertical"}>
      <RangePicker picker={rangeType} onChange={handleSelection} />
    </Space>
  );
};

export default WCTimeRange;
