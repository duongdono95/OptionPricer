import React from "react";
import Tr from "../../../../../DynamicTable/Tr";
import Td from "../../../../../DynamicTable/Td";

interface WeekCalTRowProps {
  day:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
}

const WeekCalTRow = ({ day }: WeekCalTRowProps) => {
  return (
    <Tr>
      <Td>
        <p>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
      </Td>
      <Td>
        <p>5000</p>
      </Td>
      <Td>
        <p className="unit">$</p>
        <p>10</p>
      </Td>
      <Td>
        <p className="unit">$</p>
        <p>50000</p>
      </Td>
      <Td>
        <p className="unit">$</p>
        <p>11</p>
      </Td>
      <Td>
        <p className="unit">$</p>
        <p>55000</p>
      </Td>
      <Td>
        <p className="unit">$</p>
        <p>10</p>
      </Td>
      <Td>
        <p className="unit">$</p>
        <p>55000</p>
      </Td>
    </Tr>
  );
};

export default WeekCalTRow;
