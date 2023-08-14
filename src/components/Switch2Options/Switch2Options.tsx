import React, { useState, useEffect } from "react";
import "./Switch2Options.scss";
import classNames from "classnames";

interface Switch2OptionsProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[] | number[];
  className?: string;
  activeOption?: string | number;
}

const Switch2Options = React.forwardRef<HTMLDivElement, Switch2OptionsProps>(
  ({ activeOption, className, options, ...props }, ref) => {
    const combinedClassNames = classNames(className, "Switch2Options");
    const [isActive, setIsActive] = useState(activeOption ?? options[0]);
    useEffect(() => {
      if (activeOption) {
        setIsActive(activeOption);
      }
    }, [activeOption]);
    return (
      <div className={combinedClassNames} ref={ref} {...props}>
        {options.map((option, index) => {
          return (
            <div
              className={
                isActive === option
                  ? `Switch2Options-option ${option} isActive `
                  : `Switch2Options-option ${option}`
              }
              onClick={() => setIsActive(options[index])}
            >
              {isActive === option ? option : option}
            </div>
          );
        })}
      </div>
    );
  }
);

export default Switch2Options;
