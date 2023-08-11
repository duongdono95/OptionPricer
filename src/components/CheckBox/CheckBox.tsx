import React, { useState } from "react";
import "./CheckBox.scss";
import { Check } from "lucide-react";

interface CheckBoxProps {
  isActive?: boolean;
}

const CheckBox = ({ isActive }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox" onClick={() => setIsChecked(!isChecked)}>
      {isChecked && isActive && (
        <Check size={20} strokeWidth={4} color="#ff6565" />
      )}
    </div>
  );
};

export default CheckBox;
