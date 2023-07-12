import React from "react";
import "./InputComponent.scss";
import { InputComponentType } from "../../types/GeneralTypes";
interface InputComponentProps {
  type?: InputComponentType;
  defaultValue?: number;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  defaultValue,
}) => {
  return (
    <div className="input-component">
      {type && type === "number" && <p>$</p>}
      <input
        type={type ? type : "number"}
        min={0}
        defaultValue={defaultValue ? defaultValue : 0}
      />
    </div>
  );
};

export default InputComponent;
