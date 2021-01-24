const leftHeading = document.querySelector(".detail-heading-left");
leftHeading.innerText = "OVERVIEW";
let timeline = `<ul>
                  <li class="timeline">THIS WEEK</li>
                  <li class="timeline">THIS MONTH</li>
                  <li class="timeline">THIS YEAR</li>
                </ul>`;
const rightHeading = document.querySelector(".detail-heading-right");
rightHeading.innerHTML = timeline;

import graphData from "./mainGraphData.js";
console.log(graphData.val);
let myChart = document.getElementById("myChartMain").getContext("2d");
//global options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";
new Chart(myChart, {
  type: "line",
  data: {
    labels: graphData.label,
    datasets: [
      {
        label: "USD Total",
        data: graphData.val,
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
      text: "GROSS VOLUME",
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
        left: 30,
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
