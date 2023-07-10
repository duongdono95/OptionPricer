import React, { useState } from "react";
import "./DropDown.scss";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
  setSelectedTimeOption?: React.Dispatch<React.SetStateAction<string>>;
}

const DefaultDD = React.forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options, setSelectedTimeOption }, ref) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTimeOption && setSelectedTimeOption(e.target.value);
      setSelectedOption(e.target.value);
    };
    console.log(selectedOption);
    return (
      <select
        ref={ref}
        onChange={(e) => handleOnChange(e)}
        defaultValue={selectedOption}
      >
        {options.map((option: any, index: number) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );
  }
);
DefaultDD.displayName = "DropDown";
export default DefaultDD;
