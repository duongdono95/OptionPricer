import React from "react";
interface TheadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: any;
}
const Thead = React.forwardRef<HTMLTableSectionElement, TheadProps>(
  ({ children, ...props }, ref) => {
    return (
      <thead ref={ref} {...props}>
        {children}
      </thead>
    );
  }
);
Thead.displayName = "Thead";

export default Thead;
