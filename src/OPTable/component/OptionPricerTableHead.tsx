import { useState } from "react";
import Thead from "../../TableComponents/Thead";
import Tr from "../../TableComponents/Tr";
import DropDown from "../../components/DropDown/DropDown";
import Td from "../../TableComponents/Td";
import dayjs from "dayjs";
const OptionPricerTableHead = () => {
  const nodes = ["OTA", "BEN"];
  const [selectedNode, setSelectedNode] = useState(nodes[0]);
  const defaultDate = dayjs();
  return (
    <Thead>
      <Tr className="OP-head-colored">
        <Td>
          <DropDown
            defaultValue={nodes[0]}
            value={selectedNode}
            options={nodes}
            onChange={(e) => setSelectedNode(e.target.value)}
          />
        </Td>
        <Td className="settle">
          <div className="content">
            <p className="label">Settle:</p>
            <p className="value">150.00</p>
          </div>
        </Td>
        <Td colSpan={19}>
          <div className="date-today">
            <p className="label">Today:</p>
            <p className="value">
              {defaultDate.format("DD-MM-YYYY").toString()}
            </p>
          </div>
        </Td>
      </Tr>

      <Tr className="OP-table-categories" isCategories>
        <Td>Active</Td>
        <Td>Date</Td>
        <Td>Buy/Sell</Td>
        <Td highlighted>Call/Put</Td>
        <Td>Price(/lot)</Td>
        <Td>Cost</Td>
        <Td highlighted>Strike</Td>
        <Td>Underlying</Td>
        <Td>Hours</Td>
        <Td>Delta</Td>
        <Td>Theta</Td>
        <Td>Vega</Td>
        <Td>Premium</Td>
        <Td>Underlying</Td>
        <Td>Strike</Td>
        <Td highlighted>Volatility</Td>
        <Td>
          <div>
            <p>Interest</p>
            <p>rate</p>
          </div>
        </Td>
        <Td>
          <div className="div">
            <p>Dividend</p>
            <p>YLD</p>
          </div>
        </Td>
        <Td>
          <div>
            <p>Day to</p>
            <p>EXP</p>
          </div>
        </Td>
        <Td>
          <div>
            <p>Year</p>
            <p>to EXP</p>
          </div>
        </Td>
        <Td>
          <div></div>
        </Td>
      </Tr>
    </Thead>
  );
};

export default OptionPricerTableHead;
