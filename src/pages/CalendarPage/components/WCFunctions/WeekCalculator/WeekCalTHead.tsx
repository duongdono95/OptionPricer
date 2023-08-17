import React from "react";
import Thead from "../../../../../DynamicTable/Thead";
import Tr from "../../../../../DynamicTable/Tr";
import Td from "../../../../../DynamicTable/Td";

const WeekCalTHead = () => {
  return (
    <Thead>
      <Tr>
        <Td style={{ backgroundColor: "var(--black01)" }} rowSpan={2}>
          <p></p>
        </Td>
        <Td style={{ backgroundColor: "var(--black02)" }} colSpan={3}>
          <p className="thead-title-group">Baseline Week Strip Value</p>
        </Td>
        <Td style={{ backgroundColor: "var(--black01)" }} colSpan={2}>
          <p className="thead-title-group">Weekend Floating</p>
        </Td>
        <Td style={{ backgroundColor: "var(--black02)" }} colSpan={2}>
          <p className="thead-title-group">Weekday Floating</p>
        </Td>
      </Tr>
      <Tr isCategories>
        <Td>
          <p>Volume</p>
        </Td>
        <Td>
          <p>Price</p>
        </Td>
        <Td>
          <p>Value</p>
        </Td>
        <Td>
          <p>Adjusted</p>
        </Td>
        <Td>
          <p>Value</p>
        </Td>
        <Td>
          <p>Adjusted</p>
        </Td>
        <Td>
          <p>Value</p>
        </Td>
      </Tr>
    </Thead>
  );
};

export default WeekCalTHead;
