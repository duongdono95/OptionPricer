import React, { useState } from "react";
import Thead from "../../TableComponents/Thead";
import Tr from "../../TableComponents/Tr";
import { DropDown } from "../../components/DropDown/DropDown";
import TimePicker from "../../components/TimePicker/TimePicker";
import dayjs from "dayjs";
import Td from "../../TableComponents/Td";
const PemTableHead = () => {
  const nodes = ["OTA", "BEN"];
  const timePickerOptions = [
    "Date",
    "Week",
    "Month",
    "Quarter",
    "Year",
  ];
  const [selectedTimeOption, setSelectedTimeOption] =
    useState(timePickerOptions[0]);
  const [selectedTime, setSelectedTime] =
    useState<string>();
  return (
    <Thead className="pem-head">
      <Tr>
        <Td className="nodes" rowSpan={2}>
          <DropDown.node className="" options={nodes} />
        </Td>
        <Td className="month opacity07">
          <DropDown.time
            options={timePickerOptions}
            setSelectedTimeOption={setSelectedTimeOption}
          />
        </Td>
        <Td className="settle opacity07">SETTLE</Td>
        <Td rowSpan={2} colSpan={17} className="font-large">
          {selectedTime
            ? selectedTime
            : dayjs().format("YYYY-MM-DD")}
        </Td>
      </Tr>
      <Tr>
        <Td className="month">
          <TimePicker
            selectedTimeOption={selectedTimeOption}
            setSelectedTime={setSelectedTime}
          />
        </Td>
        <Td className="settle">136.9</Td>
      </Tr>
      <Tr isCategories>
        <Td>Active</Td>
        <Td>Date</Td>
        <Td>Buy/Sell</Td>
        <Td>Call/Put</Td>
        <Td>Price(/lot)</Td>
        <Td>Cost</Td>
        <Td>Strike</Td>
        <Td>Underlying</Td>
        <Td>Hours</Td>
        <Td>Delta</Td>
        <Td>Theta</Td>
        <Td>Vega</Td>
        <Td>Premium</Td>
        <Td>Underlying</Td>
        <Td>Strike</Td>
        <Td>Volatility</Td>
        <Td>Interest rate</Td>
        <Td>Dividend yld</Td>
        <Td>Days to exp</Td>
        <Td>Years to exp</Td>
      </Tr>
    </Thead>
  );
};

export default PemTableHead;
