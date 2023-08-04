import React from "react";
import "./WCTable.scss";
import WCTableHeader from "./components/WCTableHeader";
import Table from "../../../../DynamicTable/Table";
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
      <Table>
        <WCTableHeader />
      </Table>
    </div>
  );
};

export default WCTable;
