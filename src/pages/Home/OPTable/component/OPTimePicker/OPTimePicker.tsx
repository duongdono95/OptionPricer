import React from "react";
import { DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
import "./OPTimePicker.scss";
interface OPTimePickerProps {
  selectedTimeOption: string;
  setSelectedTime?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const OPTimePicker: React.FC<OPTimePickerProps> = ({
  selectedTimeOption,
  setSelectedTime,
}) => {
  const timeType = selectedTimeOption.toLowerCase();
  const defaultDate = dayjs();
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setSelectedTime && setSelectedTime(dateString);
  };
  return (
    <Space direction={"vertical"}>
      {timeType === "date" && (
        <DatePicker defaultValue={defaultDate} onChange={onChange} />
      )}
      {timeType === "week" && (
        <DatePicker
          onChange={onChange}
          defaultValue={defaultDate}
          picker="week"
        />
      )}
      {timeType === "month" && (
        <DatePicker
          defaultValue={defaultDate}
          onChange={onChange}
          picker="month"
        />
      )}
      {timeType === "quarter" && (
        <DatePicker
          defaultValue={defaultDate}
          onChange={onChange}
          picker="quarter"
        />
      )}
      {timeType === "year" && (
        <DatePicker
          defaultValue={defaultDate}
          onChange={onChange}
          picker="year"
        />
      )}
    </Space>
  );
};

export default OPTimePicker;
