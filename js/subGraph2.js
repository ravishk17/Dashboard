import subGraphData1 from "./subGraphData1.js";
import subGraphData2 from "./subGraphData2.js";
let mySubgraph2 = document.getElementById("mySubgraph2").getContext("2d");
//global options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";
new Chart(mySubgraph2, {
  type: "line",
  data: {
    labels: subGraphData2.label,
    datasets: [
      {
        label: "USD Total",
        data: subGraphData2.val,
        // backgroundColor: "green",
        backgroundColor: "transparent",
        // backgroundColor: [
        //   "rgba(255,99,132,0.6)",
        //   "rgba(54,162,235,0.6)",
        //   "rgba(255,206,86,0.6)",
        //   "rgba(75,192,192,0.6)",
        //   "rgba(153,102,255,0.6)",
        //   "rgba(255,159,64,0.6)",
        //   "rgba(255,99,132,0.6)",
        // ],
        borderWidth: 2,
        borderColor: "#51c2d5",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "CUSTOMERS CREATED",
      position: "top",
      fontColor: "#16c79a",
    },
    legend: {
      display: false,
      position: "top",
      labels: {
        fontColor: "#000",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    tooltips: {
      enabled: true,
    },
  },
});
