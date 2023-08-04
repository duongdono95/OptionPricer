import React, { useState } from "react";
import { OPTimePickerOptions } from "../../libs/types/constant";
import WCTimePicker from "./components/WCTimePicker/WCTimePicker";
import "./CalendarPage.scss";
import WCTable from "./components/WCTable/WCTable";
const CalendarPage = () => {
  return (
    <div className="CalendarPage">
      <WCTimePicker />
      <WCTable />
    </div>
  );
};

export default CalendarPage;
