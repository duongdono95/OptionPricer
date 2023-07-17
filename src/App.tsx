import React from "react";
import "./App.scss";
import PemTable from "./PemTable/PemTable";
import Graphs from "./components/Graphs";

function App() {
  return (
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
  );
}

export default App;
