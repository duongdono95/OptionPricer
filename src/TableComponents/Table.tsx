import React from "react";
import "./Table.scss";
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, ...props }, ref) => {
    return (
      <table id="PemDynamicTable" ref={ref} {...props}>
        {children}
      </table>
    );
  }
);
Table.displayName = "Table";

export default Table;
