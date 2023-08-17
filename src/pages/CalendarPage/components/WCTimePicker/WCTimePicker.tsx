import React, { useState } from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import { OPTimePickerOptions } from "../../../../libs/types/constant";
import WCTimeRange from "./WCTimeRange";
import { OPTimePickerOptionsType } from "../../../../libs/types/GeneralTypes";
import "./WCTimePicker.scss";
const WCTimePicker = () => {
  const [rangeType, setRangeType] = useState<OPTimePickerOptionsType>(
    OPTimePickerOptions[0]
  );
  const [timeDifference, setTimeDifference] = useState<number | null>();
  return (
    <div className="WCTimePicker">
      <DropDown
        options={OPTimePickerOptions}
        defaultValue={rangeType}
        onChange={(e) =>
          setRangeType(e.target.value as OPTimePickerOptionsType)
        }
      />
      <WCTimeRange
        rangeType={rangeType.toLowerCase() as OPTimePickerOptionsType}
        setTimeDifference={setTimeDifference}
      />
      <div className="difference-time">
        <p className="label">Difference : </p>
        <div className="value">
          {timeDifference ? (
            <p>{timeDifference}</p>
          ) : (
            <p className="nan">NaN</p>
          )}
          {timeDifference === 1 ? (
            <p className="unit">{rangeType === "date" ? "day" : rangeType}</p>
          ) : (
            <p className="unit">{rangeType === "date" ? "day" : rangeType}s</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WCTimePicker;
