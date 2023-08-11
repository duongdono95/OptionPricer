import React from "react";
import WCTimePicker from "./components/WCTimePicker/WCTimePicker";
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
