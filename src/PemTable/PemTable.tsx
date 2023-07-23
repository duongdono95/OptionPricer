import React from "react";
import Table from "../TableComponents/Table";
import PemTableHead from "./component/PemTableHead";
import PemTableBody from "./component/PemTableBody";
import "./PemTable.scss";
import Tr from "../TableComponents/Tr";
import CreateNew from "../components/CreateNew/CreateNew";
import Td from "../TableComponents/Td";
import Tfoot from "../TableComponents/Tfoot";
import { pemTableStore } from "../Zustand/pemTableStore";

const PemTable = () => {
  const [isCreateMode, setIsCreateMode] = pemTableStore((state) => [
    state.isCreateMode,
    state.setIsCreateMode,
  ]);
  const handleClick = () => {
    setIsCreateMode(!isCreateMode);
  };
  return (
    <Table className="table">
      <PemTableHead />
      <PemTableBody />
      <Tfoot>
        <Tr>
          <Td>
            <div className="note">
              <div className="colored-note"></div>
              <p className="description">Editable</p>
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td colSpan={20}>
            <div onClick={() => handleClick()}>
              <CreateNew />
            </div>
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default PemTable;
