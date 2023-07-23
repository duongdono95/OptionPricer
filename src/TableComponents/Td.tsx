import React from "react";

interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  highlighted?: boolean;
}

// const Td: React.FC<TdProps> = ({ children, ...props }) => {
//   return (
//     <td {...props}>
//       <div className="pem-data---container">{children}</div>
//     </td>
//   );
// };

const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ children, highlighted, ...props }, ref) => {
    return (
      <td className={highlighted ? "highlighted" : ""} ref={ref} {...props}>
        <div
          className={
            highlighted ? "pem-data---container " : "pem-data---container"
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
