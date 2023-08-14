import React from "react";
import "./HighlightedData.scss";
import { TradingRole } from "../../../../../libs/types/GeneralTypes";

interface HighlightedDataProps {
  role: TradingRole;
  tradedValue: number;
}

const HighlightedData: React.FC<HighlightedDataProps> = ({
  role,
  tradedValue,
}) => {
  return (
    <div className={`highlighted-data ${role}`}>
      <p className="signature">{role === "Buy" ? "+" : "-"}</p>
      <p className="value">{tradedValue}</p>
    </div>
  );
};

export default HighlightedData;
