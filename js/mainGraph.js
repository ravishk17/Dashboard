let myChart = document.getElementById("myChart").getContext("2d");
//global options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";
let massPopChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: ["cityA", "B", "FEW", "FEWWS", "fewe", "hyhrt"],
    datasets: [
      {
        label: "Population",
        data: [35546, 25435, 32345, 54322, 54245, 65543],
        // backgroundColor: "green",
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(153,102,255,0.6)",
          "rgba(255,159,64,0.6)",
          "rgba(255,99,132,0.6)",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Largest Citites",
      fontSize: 25,
    },
    legend: {
      position: "right",
      labels: {
        fontColor: "#000",
      },
    },
    layout: {
      padding: {
        left: 50,
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
