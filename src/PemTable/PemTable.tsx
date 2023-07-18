import React from "react";
import Table from "../TableComponents/Table";
import PemTableHead from "./component/PemTableHead";
import PemTableBody from "./component/PemTableBody";
import "./PemTable.scss";
import Tr from "../TableComponents/Tr";
import CreateNew from "../components/CreateNew/CreateNew";
import Td from "../TableComponents/Td";
import Tfoot from "../TableComponents/Tfoot";
import { zustandStore } from "../Zustand/store";
import TableBodyRow from "./component/TableBodyRow";

const PemTable = () => {
  const { isCreateMode, setIsCreateMode } = zustandStore();
  return (
    <Table className="table">
      <PemTableHead />
      <PemTableBody />
      <Tfoot>
        <Tr>
          <Td colSpan={20}>
            <div
              onClick={() => setIsCreateMode(!isCreateMode)}
            >
              <CreateNew />
            </div>
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default PemTable;
