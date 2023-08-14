import React, { useRef, useState } from "react";
import "./SwitchButton.scss";
import { CallPutConstants } from "../../../../../libs/types/constant";
import { OptionType } from "@pantheon-tech/bsm-optionmodel";

interface SwitchButtonProps {
  optionType: OptionType.PUT | OptionType.CALL;
  setOptionType: React.Dispatch<
    React.SetStateAction<OptionType.PUT | OptionType.CALL>
  >;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  optionType,
  setOptionType,
}) => {
  return (
    <div className="switch-button">
      {CallPutConstants.map((item, index) => {
        return (
          <div
            className={optionType === item ? "side width60" : "side width20"}
            key={index}
            onClick={() => setOptionType(item)}
            style={{
              backgroundColor: `var(--${item.toLowerCase()})`,
            }}
          >
            {optionType === item ? (item === "C" ? "Call" : "Put") : item}
          </div>
        );
      })}
    </div>
  );
};

export default SwitchButton;
