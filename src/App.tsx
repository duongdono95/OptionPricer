import React, { useEffect } from "react";

import { GetOption } from "./helpers/getOption";
import { OPTableStore } from "./Zustand/OPTableStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
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
      <RouterProvider router={router} />
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
    </div>
  );
}

export default App;
