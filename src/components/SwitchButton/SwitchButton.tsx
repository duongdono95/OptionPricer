import React, { useEffect, useState } from "react";
import "./SwitchButton.scss";
import { CallPutConstants } from "../../types/constant";

const SwitchButton = ({ type }: { type: string | null }) => {
  const [isSelected, setIsSelected] = useState("C");
  useEffect(() => {
    if (type !== null) {
      setIsSelected(type);
    }
  }, [type]);
  return (
    <div className="switch-button">
      {CallPutConstants.map((item, index) => {
        return (
          <div
            className={isSelected === item ? "side flex-grow" : "side"}
            key={index}
            onClick={() => setIsSelected(item)}
            style={{ backgroundColor: `var(--${item.toLowerCase()}-side)` }}
          >
            {isSelected === item ? (item === "C" ? "Call" : "Put") : item}
          </div>
        );
      })}
    </div>
  );
};

export default SwitchButton;
