import React, { useState } from "react";

interface RangeComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  initialValue?: number;
}

const RangeComponent = React.forwardRef<HTMLInputElement, RangeComponentProps>(
  ({ min, max, initialValue }, ref) => {
    const [value, setValue] = useState<number>(initialValue || min);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(event.target.value));
    };
    return (
      <div ref={ref} className="range-component">
        <input
          onChange={(e) => handleChange(e)}
          value={value}
          type="range"
          min={min}
          max={max}
          id="range-component"
        />
        <div>{value}</div>
      </div>
    );
  }
);

export default RangeComponent;
