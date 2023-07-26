import React, { useEffect } from "react";
import "./App.scss";
import Graphs from "./components/Graphs";
import GraphCustomize from "./components/GraphCustomize/GraphCustomize";
import { GetOption } from "./helpers/getOption";
import OptionPricerTable from "./OPTable/OptionPricerTable";
import { OPTableStore } from "./Zustand/OPTableStore";

function App() {
  const [setTableRowDataArr] = OPTableStore((state) => [
    state.setTableRowDataArr,
  ]);
  const firstRow = GetOption();
  useEffect(() => {
    if (firstRow) {
      setTableRowDataArr(firstRow);
    }
  }, [firstRow, setTableRowDataArr]);
  return (
    <div className="App">
      <OptionPricerTable />
      <div className="App-Graph">
        <GraphCustomize />
        <Graphs />
      </div>
    </div>
  );
}

export default App;
