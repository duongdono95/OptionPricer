import React from "react";
import Thead from "../../../../../DynamicTable/Thead";
import Td from "../../../../../DynamicTable/Td";
import Tr from "../../../../../DynamicTable/Tr";
const WCTableHeader = () => {
  return (
    <Thead>
      <Tr isCategories>
        <Td>MONTH</Td>
        <Td>QUARTER</Td>
        <Td>SEASON</Td>
        <Td>YEAR</Td>
      </Tr>
    </Thead>
  );
};

export default WCTableHeader;
