import React from "react";
import "./DropDown.scss";

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
}

const DropDown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  ({ options, defaultValue, ...props }, ref) => {
    return (
      <select
        ref={ref}
        // onChange={(e) => handleOnChange(e)}
        defaultValue={defaultValue ?? options[0]}
        className="default-dropdown"
        {...props}
      >
        {options.map((option: any, index: number) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );
  }
);
DropDown.displayName = "DropDown";
export default DropDown;
