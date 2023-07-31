import React from "react";
import OptionPricerTable from "../../OPTable/OptionPricerTable";
import GraphCustomize from "../../components/GraphCustomize/GraphCustomize";
import Graphs from "../../components/Graphs";
import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <OptionPricerTable />
      <div className="Home-Graph">
        <GraphCustomize />
        <Graphs />
      </div>
    </div>
  );
};

export default Home;
