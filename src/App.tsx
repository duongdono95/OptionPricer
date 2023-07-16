import React from "react";
import "./App.scss";
import PemTable from "./PemTable/PemTable";
import Graphs from "./components/Graphs";
import { useGenerationStore } from "./Zustand/store";

function App() {
  const { isLoading, setIsLoading } = useGenerationStore();
  console.log(isLoading);

  return (
    <div className="App">
      <button onClick={() => setIsLoading(!isLoading)}>Click me</button>
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
