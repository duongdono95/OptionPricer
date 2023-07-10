import React from "react";

interface TdProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

// const Td: React.FC<TdProps> = ({ children, ...props }) => {
//   return (
//     <td {...props}>
//       <div className="pem-data---container">{children}</div>
//     </td>
//   );
// };

const Td = React.forwardRef<HTMLTableCellElement, TdProps>(
  ({ children, ...props }, ref) => {
    return (
      <td ref={ref} {...props}>
        <div className="pem-data---container">{children}</div>
      </td>
    );
  }
);
Td.displayName = "Td";
export default Td;
