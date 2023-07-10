import React from "react";

interface TbodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Tbody = React.forwardRef<HTMLTableSectionElement, TbodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <tbody ref={ref} {...props}>
        {children}
      </tbody>
    );
  }
);
Tbody.displayName = "Tbody";

export default Tbody;
