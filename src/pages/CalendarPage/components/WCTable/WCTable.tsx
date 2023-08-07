import React from "react";
import "./WCTable.scss";
import WCTableHeader from "./components/WCTableHeader";
import Table from "../../../../DynamicTable/Table";
import WCTableBody from "./components/WCTableBody";
const WCTable = () => {
  return (
    <div className="WC-page-content">
      <div className="seasons">
        <div className="season">
          <div className="color summer"></div>
          <p>Summer</p>
        </div>
        <div className="season">
          <div className="color winter"></div>
          <p>Winter</p>
        </div>
      </div>
      <Table className="wc-year-container">
        <WCTableHeader />
        <WCTableBody />
      </Table>
    </div>
  );
};

export default WCTable;
