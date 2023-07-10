import React from "react";
import "./HighlightedData.scss";
import { TradingRole } from "../../types/GeneralTypes";

interface HighlightedDataProps {
  role: TradingRole;
  tradedValue: number;
}

const HighlightedData: React.FC<HighlightedDataProps> = ({
  role,
  tradedValue,
}) => {
  return (
    <div
      className={
        role === "Buy" ? "highlighted-data Buy" : "highlighted-data Sell"
      }
    >
      <p className="signature">{role === "Buy" ? "+" : "-"}</p>
      <p className="value">{tradedValue}</p>
    </div>
  );
};

export default HighlightedData;
