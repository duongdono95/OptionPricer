import React from "react";
import "./SwitchButton.scss";
import { CallPutConstants } from "../../types/constant";
import { zustandStore } from "../../Zustand/store";

const SwitchButton = () => {
  const [initialOptionType, setInitialOptionType] =
    zustandStore((state) => [
      state.initialOptionType,
      state.setInitialOptionType,
    ]);
  return (
    <div className="switch-button">
      {CallPutConstants.map((item, index) => {
        return (
          <div
            className={
              initialOptionType === item
                ? "side flex-grow"
                : "side"
            }
            key={index}
            onClick={() => setInitialOptionType(item)}
            style={{
              backgroundColor: `var(--${item.toLowerCase()}-side)`,
            }}
          >
            {initialOptionType === item
              ? item === "C"
                ? "Call"
                : "Put"
              : item}
          </div>
        );
      })}
    </div>
  );
};

export default SwitchButton;
