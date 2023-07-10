import React, { useState } from "react";
import "./SwitchButton.scss";
import { CallPutConstants } from "../../types/constant";

const SwitchButton = () => {
  const [isSelected, setIsSelected] = useState(CallPutConstants[0]);
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
            {isSelected === item ? item : item.charAt(0)}
          </div>
        );
      })}
    </div>
  );
};

export default SwitchButton;
