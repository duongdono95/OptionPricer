import React from "react";
import WCTimePicker from "./components/WCTimePicker/WCTimePicker";
import WCTable from "./components/WCTable/WCTable";
import WCFunctions from "./components/WCFunctions/WCFunctions";
import "./CalendarPage.scss";
const CalendarPage = () => {
  return (
    <div className="CalendarPage">
      <WCTimePicker />
      <div className="wc-page-content">
        <WCTable />
        <WCFunctions />
      </div>
    </div>
  );
};

export default CalendarPage;
