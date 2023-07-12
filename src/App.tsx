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
        <div>
          <select name="view-mode" id="view-mode">
            <option value="3d">3D Mode</option>
            <option value="2d">2D Mode</option>
          </select>
        </div>
        <Graphs />
      </div>
    </TableProvider>
  );
}

export default App;
