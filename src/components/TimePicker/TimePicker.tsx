import React from "react";
import { DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
import "./TimePicker.scss";
interface TimePickerProps {
  selectedTimeOption: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TimePicker: React.FC<TimePickerProps> = ({
  selectedTimeOption,
  setSelectedTime,
}) => {
  const defaultDate = dayjs();
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setSelectedTime(dateString);
  };
  return (
    <Space direction={"vertical"}>
      {selectedTimeOption === "Date" && (
        <DatePicker defaultValue={defaultDate} onChange={onChange} />
      )}
      {selectedTimeOption === "Week" && (
        <DatePicker
          onChange={onChange}
          defaultValue={defaultDate}
          picker="week"
        />
      )}
      {selectedTimeOption === "Month" && (
        <DatePicker
          defaultValue={defaultDate}
          onChange={onChange}
          picker="month"
        />
      )}
      {selectedTimeOption === "Quarter" && (
        <DatePicker
          defaultValue={defaultDate}
          onChange={onChange}
          picker="quarter"
        />
      )}
      {selectedTimeOption === "Year" && (
        <DatePicker
          defaultValue={defaultDate}
          onChange={onChange}
          picker="year"
        />
      )}
    </Space>
  );
};

export default TimePicker;
