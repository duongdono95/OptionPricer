import React, { useEffect } from "react";
import "./App.scss";
import Graphs from "./components/Graphs";
import GraphCustomize from "./components/GraphCustomize/GraphCustomize";
import { GetOption } from "./helpers/getOption";
import OptionPricerTable from "./OPTable/OptionPricerTable";
import { OPTableStore } from "./Zustand/OPTableStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <OptionPricerTable />
      <div className="App-Graph">
        <GraphCustomize />
        <Graphs />
      </div>
    </div>
  );
}

export default App;
