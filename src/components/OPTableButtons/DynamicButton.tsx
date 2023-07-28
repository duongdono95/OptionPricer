import React from "react";
import classNames from "classnames";
import "./OPTableButtons.scss";
import { Loader } from "lucide-react";
interface DynamicButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: any;
  className?: string;
  isLoading?: boolean;
}

const DynamicButton = React.forwardRef<HTMLButtonElement, DynamicButtonProps>(
  ({ isLoading, children, className, ...props }, ref) => {
    const combinedClassNames = classNames(className, "OPButton");
    return (
      <button ref={ref} className={combinedClassNames} {...props}>
        {children}
        {isLoading && <Loader size={20} className="loader" />}
      </button>
    );
  }
);

export default DynamicButton;
