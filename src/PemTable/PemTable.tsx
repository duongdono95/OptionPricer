import React from "react";
import Table from "../TableComponents/Table";
import PemTableHead from "./component/PemTableHead";
import PemTableBody from "./component/PemTableBody";
import "./PemTable.scss";
import Tr from "../TableComponents/Tr";
import CreateNew from "../components/CreateNew/CreateNew";
import Td from "../TableComponents/Td";
import Tfoot from "../TableComponents/Tfoot";

const PemTable = () => {
  return (
    <Table className="table">
      <PemTableHead />
      <PemTableBody />
      <Tfoot>
        <Tr>
          <Td colSpan={20}>
            <CreateNew />
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default PemTable;
