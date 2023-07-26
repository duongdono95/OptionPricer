import React from "react";
import classNames from "classnames";
import "./OPTableButtons.scss";
interface OPButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: any;
  className?: string;
}

const OPButton = React.forwardRef<HTMLButtonElement, OPButtonProps>(
  ({ children, className, ...props }, ref) => {
    const combinedClassNames = classNames(className, "OPButton");
    return (
      <button ref={ref} className={combinedClassNames} {...props}>
        {children}
      </button>
    );
  }
);

export default OPButton;
