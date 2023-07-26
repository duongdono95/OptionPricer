import React from "react";

interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  highlighted?: boolean;
}

const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ children, highlighted, ...props }, ref) => {
    return (
      <td className={highlighted ? "highlighted" : ""} ref={ref} {...props}>
        <div
          className={
            highlighted ? "AE-data---container " : "AE-data---container"
          }
        >
          {children}
        </div>
      </td>
    );
  }
);
Td.displayName = "Td";
export default Td;
