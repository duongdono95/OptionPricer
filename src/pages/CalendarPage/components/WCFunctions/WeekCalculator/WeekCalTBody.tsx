import React from "react";
import Tbody from "../../../../../DynamicTable/Tbody";
import Td from "../../../../../DynamicTable/Td";
import WeekCalTRow from "./WeekCalTRow";
import Tr from "../../../../../DynamicTable/Tr";
import ConvertNumLocaleString from "../../../../../components/ConvertNumLocaleString/ConvertNumLocaleString";

const WeekCalTBody = () => {
  const number = 350000;
  return (
    <Tbody>
      <WeekCalTRow day="monday" />
      <WeekCalTRow day="tuesday" />
      <WeekCalTRow day="wednesday" />
      <WeekCalTRow day="thursday" />
      <WeekCalTRow day="friday" />
      <WeekCalTRow day="saturday" />
      <WeekCalTRow day="sunday" />
      <Tr className="total_row">
        <Td highlighted>
          <p></p>
        </Td>
        <Td highlighted>
          <ConvertNumLocaleString data={number} />
        </Td>
        <Td highlighted>
          <p></p>
        </Td>
        <Td highlighted>
          <ConvertNumLocaleString data={number} unit="$" />
        </Td>
        <Td highlighted>
          <p></p>
        </Td>
        <Td highlighted>
          <ConvertNumLocaleString data={number} unit="$" />
        </Td>
        <Td highlighted>
          <p></p>
        </Td>
        <Td highlighted>
          <ConvertNumLocaleString data={number} unit="$" />
        </Td>
      </Tr>
    </Tbody>
  );
};

export default WeekCalTBody;
