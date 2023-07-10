import React from "react";
import "./App.scss";
import PemTable from "./PemTable/PemTable";
import { TableProvider } from "./TableComponents/TableProvider";
import Graphs from "./components/Graphs";

function App() {
  return (
    <TableProvider>
      <div className="App">
        <PemTable />
        <Graphs />
      </div>
    </TableProvider>
  );
}

export default App;
