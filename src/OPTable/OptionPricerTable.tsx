import React from "react";
import Table from "../TableComponents/Table";
import OptionPricerTableHead from "./component/OptionPricerTableHead";
import OptionPricerTableBody from "./component/OptionPricerTableBody";
import "./OptionPricerTable.scss";
import Tr from "../TableComponents/Tr";
import Td from "../TableComponents/Td";
import Tfoot from "../TableComponents/Tfoot";

const OptionPricerTable = () => {
  return (
    <Table className="table">
      <OptionPricerTableHead />
      <OptionPricerTableBody />
      <Tfoot>
        <Tr>
          <Td colSpan={21}>
            <div className="note">
              <div className="colored-note"></div>
              <p className="description">Editable</p>
            </div>
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default OptionPricerTable;
