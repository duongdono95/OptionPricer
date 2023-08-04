import React, { useState } from "react";
import DropDown from "../../../../../components/DropDown/DropDown";
import OPTimePicker from "../OPTimePicker/OPTimePicker";
import { OPTimePickerOptions } from "../../../../../libs/types/constant";
import "./OPDateSelection.scss";
import { OPTimePickerOptionsType } from "../../../../../libs/types/GeneralTypes";

const OPDateSelection = () => {
  const [timeOption, setTimeOption] = useState(OPTimePickerOptions[0]);
  const [selectedTime, setSelectedTime] = useState<string>();
  return (
    <div className="table-exp-date">
      <DropDown
        options={OPTimePickerOptions}
        defaultValue={timeOption}
        value={timeOption}
        onChange={(e) =>
          setTimeOption(e.target.value as OPTimePickerOptionsType)
        }
      />

      <OPTimePicker
        selectedTimeOption={timeOption}
        setSelectedTime={setSelectedTime}
      />
    </div>
  );
};

export default OPDateSelection;
