import React from "react";
import "./WCTable.scss";
import WCTableHeader from "./components/WCTableHeader";
import Table from "../../../../DynamicTable/Table";
import dayjs from "dayjs";
import WCTableBody from "./components/WCTableBody";
import { WCPageStore } from "../../../../Zustand/CalendarStore";
const WCTable = () => {
  const [today] = WCPageStore((state) => [
    state.today,
    state.startTime,
    state.endTime,
  ]);
  const years = [today.year, today.year + 1, today.year + 2, today.year + 3];
  return (
    <div className="WC-page-content">
      <div className="notes">
        <div className="note">
          <div className="color summer"></div>
          <p>Summer</p>
        </div>
        <div className="note">
          <div className="color winter"></div>
          <p>Winter</p>
        </div>
      </div>
      <Table className="wc-year-container">
        <WCTableHeader />
        {years.map((item, index) => {
          return <WCTableBody year={item} key={index} />;
        })}
      </Table>
    </div>
  );
};

export default WCTable;
