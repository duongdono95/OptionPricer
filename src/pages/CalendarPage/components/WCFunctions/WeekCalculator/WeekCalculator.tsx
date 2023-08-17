import React from "react";
import "./WeekCalculator.scss";
import Table from "../../../../../DynamicTable/Table";
import WeekCalTHead from "./WeekCalTHead";
import WeekCalTBody from "./WeekCalTBody";

const WeekCalculator = () => {
  return (
    <div className="WeekCalculator">
      <Table>
        <WeekCalTHead />
        <WeekCalTBody />
      </Table>
    </div>
  );
};

export default WeekCalculator;
