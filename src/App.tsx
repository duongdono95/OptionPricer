import React from "react";
import "./App.scss";
import PemTable from "./PemTable/PemTable";
import Graphs from "./components/Graphs";
import GraphCustomize from "./components/GraphCustomize/GraphCustomize";

function App() {
  return (
    <div className="App">
      <PemTable />
      <div className="App-Graph">
        <GraphCustomize />
        <Graphs />
      </div>
    </div>
  );
}

export default App;
