import React from "react";
import "./ConvertNumLocaleString.scss";

interface ConvertNumLocaleStringProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: number | string;
  unit?: string;
}

const ConvertNumLocaleString = React.forwardRef<
  HTMLDivElement,
  ConvertNumLocaleStringProps
>(({ data, unit }: ConvertNumLocaleStringProps, ref) => {
  let num = data;
  if (typeof data === "string") {
    num = parseInt(num as string);
  }
  return (
    <div className="converted-data">
      {unit && <p>{unit}</p>}
      <p>{num.toLocaleString()}</p>
    </div>
  );
});
ConvertNumLocaleString.displayName = "ConvertNumLocaleString";
export default ConvertNumLocaleString;
