import React, { useState } from "react";
import "./GraphCustomize.scss";
import DropDown from "../DropDown/DropDown";
import InputComponent from "../InputComponent/InputComponent";
const GraphCustomize = () => {
  const allVolatilityOptions = [
    "Strike",
    "Delta",
    "Theta",
    "Vega",
    "Premium",
    "Underlying Price",
    "Expiry Date",
    "Volatility",
  ];

  const [selectedOption1, setSelectedOption1] = useState(
    allVolatilityOptions[7]
  );
  const [selectedOption2, setSelectedOption2] = useState(
    allVolatilityOptions[6]
  );
  const [selectedOption3, setSelectedOption3] = useState(
    allVolatilityOptions[5]
  );

  const remainingVolatilityOptions = (exclude1: string, exclude2: string) => {
    const updatedOptions = allVolatilityOptions.filter(
      (item) => item !== exclude1 && item !== exclude2
    );
    return updatedOptions;
  };
  return (
    <table className="graph-customize">
      <thead>
        <tr>
          <td colSpan={9}>
            <h3>Graph Setting</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="title">X-Axis</td>
          <td className="graph-customize-dd">
            <DropDown
              name="selectedOption1"
              options={remainingVolatilityOptions(
                selectedOption2,
                selectedOption3
              )}
              defaultValue={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
              value={selectedOption1}
            />
          </td>
          <td>
            <div className="empty-box"></div>
          </td>
          <td className="title">Range:</td>
          <td>
            <InputComponent placeholder="From" type="number" />
          </td>
          <td>
            <InputComponent placeholder="To" type="number" />
          </td>
          <td>
            <div className="empty-box"></div>
          </td>
          <td className="title">Step:</td>
          <td>
            <InputComponent placeholder="0" type="number" />
          </td>
        </tr>
        <tr className="graph-customize-group">
          <td>
            <p className="title">Y-Axis</p>
          </td>
          <td>
            <DropDown
              name="selectedOption2"
              options={remainingVolatilityOptions(
                selectedOption1,
                selectedOption3
              )}
              defaultValue={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
              value={selectedOption2}
            />
          </td>
          <td>
            <div className="empty-box"></div>
          </td>
          <td className="title">Range:</td>
          <td>
            <InputComponent placeholder="From" type="number" />
          </td>
          <td>
            <InputComponent placeholder="To" type="number" />
          </td>
          <td>
            <div className="empty-box"></div>
          </td>
          <td className="title">Step:</td>
          <td>
            <InputComponent placeholder="0" type="number" />
          </td>
        </tr>
        <tr className="graph-customize-group">
          <td className="title">Z-Axis</td>
          <td>
            <DropDown
              name="selectedOption3"
              options={remainingVolatilityOptions(
                selectedOption1,
                selectedOption2
              )}
              defaultValue={selectedOption3}
              onChange={(e) => setSelectedOption3(e.target.value)}
              value={selectedOption3}
            />
          </td>
          <td>
            <div className="empty-box"></div>
          </td>
          <td className="title">Range:</td>
          <td>
            <InputComponent placeholder="From" type="number" />
          </td>
          <td>
            <InputComponent placeholder="To" type="number" />
          </td>
          <td>
            <div className="empty-box"></div>
          </td>
          <td className="title">Step:</td>
          <td>
            <InputComponent placeholder="0" type="number" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GraphCustomize;
