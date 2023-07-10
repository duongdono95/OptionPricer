import React, { useState } from "react";
import "./DropDown.scss";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
}

const NodeDD = React.forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options }, ref) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(e.target.value);
    };
    return (
      <select
        ref={ref}
        onChange={(e) => handleOnChange(e)}
        className={`dropdown ${selectedOption}`}
        defaultValue={selectedOption}
      >
        {options.map((option: any, index: number) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );
  }
);
NodeDD.displayName = "DropDown";
export default NodeDD;
