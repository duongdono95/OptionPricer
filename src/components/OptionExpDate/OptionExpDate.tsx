import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";
import TimePicker from "../TimePicker/TimePicker";
import { timePickerOptions } from "../../types/constant";
import "./OptionExpDate.scss";

const OptionExpDate = () => {
  const [timeOption, setTimeOption] = useState(timePickerOptions[0]);
  const [selectedTime, setSelectedTime] = useState<string>();
  return (
    <div className="table-exp-date">
      <DropDown
        options={timePickerOptions}
        defaultValue={timeOption}
        value={timeOption}
        onChange={(e) => setTimeOption(e.target.value)}
      />

      <TimePicker
        selectedTimeOption={timeOption}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
};

export default OptionExpDate;
