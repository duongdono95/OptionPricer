import React, { useState } from "react";
import "./CheckBox.scss";
import { Check } from "lucide-react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox" onClick={() => setIsChecked(!isChecked)}>
      {isChecked && <Check size={20} stroke-width={4} color="#ff6565" />}
    </div>
  );
};

export default CheckBox;
