import React, { useState } from "react";
import classNames from "classnames";

interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: any;
  theadCategories?: boolean;
  className?: string;
  isCategories?: boolean;
  noColoredRow?: boolean;
}

const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  (
    {
      children,
      className,
      theadCategories,
      isCategories,
      noColoredRow,
      ...props
    },
    ref
  ) => {
    const combinedClassNames = classNames(className, {
      isCategories: isCategories,
      noColoredRow: !noColoredRow,
    });
    return (
      <tr ref={ref} className={combinedClassNames} {...props}>
        {children}
      </tr>
    );
  }
);

export default Tr;
