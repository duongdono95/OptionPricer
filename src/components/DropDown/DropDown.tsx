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
        defaultValue={defaultValue ?? options[0]}
        className="default-dropdown"
        {...props}
      >
        {options.map((option: any, index: number) => {
          return (
            <option key={index}>
              {option.charAt(0).toUpperCase()}
              {option.slice(1)}
            </option>
          );
        })}
      </select>
    );
  }
);
DropDown.displayName = "DropDown";
export default DropDown;
