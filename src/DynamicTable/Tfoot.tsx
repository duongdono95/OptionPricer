import React from "react";
interface TfootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: any;
}
const Tfoot = React.forwardRef<HTMLTableSectionElement, TfootProps>(
  ({ children, ...props }, ref) => {
    return (
      <tfoot ref={ref} {...props}>
        {children}
      </tfoot>
    );
  }
);
Tfoot.displayName = "Tfoot";

export default Tfoot;
