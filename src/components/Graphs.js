import React from "react";
import Plot from "react-plotly.js";

// Define the labels for axes
// yLabels.length should be equal to number of array in z
// xLabels.length should be equal to number of element in an array in z
const yLabels = ['30/06/23', '01/07/23', '02/07/23', '03/07/23', '04/07/23', '05/07/23', '06/07/23', '07/07/23', '08/07/23', '09/07/23', '10/07/23', '11/07/23', '12/07/23', '13/07/23', '14/07/23'];
const xLabels = [2021, 2022, 2023, 2024, 2025, 2026];

const xAxisTitle = 'Years'
const yAxisTitle = 'Months'
const zAxisTitle = 'Values'
const graphData = {
  // Define the value data for the Graph
  z: [
    [8.83, 8.89, 8.81, 8.87, 8.9, 8.87],
    [8.89, 8.94, 8.85, 8.94, 8.96, 8.92],
    [8.84, 8.9, 8.82, 8.92, 8.93, 8.91],
    [8.79, 8.85, 8.79, 8.9, 8.94, 8.92],
    [8.79, 8.88, 8.81, 8.9, 8.95, 8.92],
    [8.8, 8.82, 8.78, 8.91, 8.94, 8.92],
    [8.75, 8.78, 8.77, 8.91, 8.95, 8.92],
    [8.8, 8.8, 8.77, 8.91, 8.95, 8.94],
    [8.74, 8.81, 8.76, 8.93, 8.98, 8.99],
    [8.89, 8.99, 8.92, 9.1, 9.13, 9.11],
    [8.97, 8.97, 8.91, 9.09, 9.11, 9.11],
    [9.04, 9.08, 9.05, 9.25, 9.28, 9.27],
    [9, 9.01, 9, 9.2, 9.23, 9.2],
    [8.99, 8.99, 8.98, 9.18, 9.2, 9.19],
    [8.93, 8.97, 8.97, 9.18, 9.2, 9.18],
  ],
  masterGraph: {
    title: "3D Surface Graph",
    xAxis: xAxisTitle,
    yAxis: yAxisTitle,
    zAxis: zAxisTitle,
  },
};

const Graphs = () => {
  return (
    <Plot
      data={[
        {
          type: "surface",
          z: graphData.z,
        },
      ]}
      layout={{

        width: 900,
        height: 900,
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 50,
          pad: 4,
        },
        title: '3D surface Graph',
        annotations: [
          {
            text: graphData.masterGraph.model,
            font: {
              size: 14,
              color: "#444444",
            },
            showarrow: false,
            align: "center",
            x: 0.5,
            y: 1.1,
            xref: "paper",
            yref: "paper",
          },
        ],
        scene: {
          // styles the overall layout for graph

          hovermode: "closest",
          xaxis: {
            title: graphData.masterGraph.xAxis,
            titlefont: {
              size: 24,
              color: "#444444",
            },
            // ------ Loop through xLabels to get the label value
            tickvals: [...Array(xLabels.length).keys()],
            ticktext: xLabels,
            // -------
            backgroundcolor: "rgb(230, 200, 200)",
            gridcolor: "rgb(255, 255, 255)",
            showbackground: true,
            zerolinecolor: "rgb(255, 255, 255)",
          },
          yaxis: {
            title: graphData.masterGraph.yAxis,
            titlefont: {
              size: 24,
              color: "#444444",

            },
            // ------ Loop through xLabels to get the label value
            tickvals: [...Array(yLabels.length).keys()],
            ticktext: yLabels,
            // ---------
            backgroundcolor: "rgb(200, 219,230)",
            gridcolor: "rgb(255, 255, 255)",
            showbackground: true,
            zerolinecolor: "rgb(255, 255, 255)",

          },
          zaxis: {
            title: graphData.masterGraph.zAxis,
            titlefont: {
              size: 24,
              color: "#444444",
            },

            backgroundcolor: "rgb(200, 230,207)",
            gridcolor: "rgb(255, 255, 255)",
            showbackground: true,
            zerolinecolor: "rgb(255, 255, 255)"
          },
        },
      }}
    />
  );
}

export default Graphs