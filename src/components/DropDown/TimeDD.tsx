import React, { useState } from "react";
import "./DropDown.scss";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
  setSelectedTimeOption?: React.Dispatch<React.SetStateAction<string>>;
}

const TimeDD = React.forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options, setSelectedTimeOption }, ref) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTimeOption && setSelectedTimeOption(e.target.value);
      setSelectedOption(e.target.value);
    };
    return (
      <select
        ref={ref}
        onChange={(e) => handleOnChange(e)}
        className={"dropdown"}
        defaultValue={selectedOption}
      >
        {options.map((option: any, index: number) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );
  }
);
TimeDD.displayName = "DropDown";
export default TimeDD;
