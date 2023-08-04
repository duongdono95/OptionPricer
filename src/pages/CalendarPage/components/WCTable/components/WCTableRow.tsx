import React from "react";
import Tr from "../../../../../DynamicTable/Tr";
import Td from "../../../../../DynamicTable/Td";

const WCTableRow = () => {
  return (
    <Tr isCategories>
      <Td>MONTH</Td>
      <Td>QUARTER</Td>
      <Td>YEAR</Td>
    </Tr>
  );
};

export default WCTableRow;
