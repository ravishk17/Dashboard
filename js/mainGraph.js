const leftHeading = document.querySelector(".detail-heading-left");
leftHeading.innerText = "OVERVIEW";
const rightHeading = document.querySelector(".detail-heading-right");
rightHeading.innerText = "TIMELINE";
let myChart = document.getElementById("myChartMain").getContext("2d");
//global options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";
let grossVolume = new Chart(myChart, {
  type: "line",
  data: {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "USD Total",
        data: [0, 180, 120, 250, 210, 310, 190, 598, 320, 280, 330, 240],
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
