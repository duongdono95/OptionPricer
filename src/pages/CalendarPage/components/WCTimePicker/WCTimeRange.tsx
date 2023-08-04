import { DatePicker, Space } from "antd";
import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { OPTimePickerOptionsType } from "../../../../libs/types/GeneralTypes";
import { RangeValue } from "rc-picker/lib/interface";
import { calculateTimeDifference } from "../../../../libs/hooks/hooks";

interface WCTimeRangeProps {
  rangeType: OPTimePickerOptionsType;
  setTimeDifference: React.Dispatch<any>;
}

const WCTimeRange: React.FC<WCTimeRangeProps> = ({
  rangeType,
  setTimeDifference,
}) => {
  const { RangePicker } = DatePicker;
  const handleSelection = (
    values: RangeValue<Dayjs>
    // formatString: [string, string]
  ) => {
    setTimeDifference(0);
    const difference = calculateTimeDifference(values, rangeType);
    console.log(difference);
    setTimeDifference(difference);
  };

  return (
    <Space direction={"vertical"}>
      <RangePicker picker={rangeType} onChange={handleSelection} />
    </Space>
  );
};

export default WCTimeRange;
