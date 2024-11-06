// Age Bar Graph
const ctxAgeRange = document.getElementById("ageBarChart").getContext("2d");
const ageRangeChart = new Chart(ctxAgeRange, {
  type: "bar",
  data: {
    labels: ["0-18", "19-25", "26-35", "36-45", "46+"],
    datasets: [
      {
        label: "Percentage of Users",
        data: [25, 30, 75, 93, 70], // Example data
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 25,
          max: 100,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  },
});

const employmentCtx = document
  .getElementById("employmentPieChart")
  .getContext("2d");
const employmentPieChart = new Chart(employmentCtx, {
  type: "pie",
  data: {
    labels: [
      "Unemployed",
      "Full-Time Job",
      "Part-Time Job",
      "Home Worker",
      "Self Employed/Daily Hustle",
      "Student/Learner",
      "Other",
    ],
    datasets: [
      {
        label: "Employment Status",
        data: [10, 25, 15, 5, 20, 15, 10], // Example data
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw + "%";
          },
        },
      },
    },
  },
});

const wifiCtx = document.getElementById("wifiUsageChart").getContext("2d");
const wifiUsageChart = new Chart(wifiCtx, {
  type: "bar",
  data: {
    labels: [
      "Never",
      "Hardly Ever",
      "Once a Week",
      "Every Few Times a Month",
      "Every Few Days",
      "Every Day",
    ],
    datasets: [
      {
        label: "WiFi Usage",
        data: [10, 20, 30, 40, 70, 95], // Example data (percentages)
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    indexAxis: "y", // Set indexAxis to 'y' for horizontal bar
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          max: 100,
        },
        title: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  },
});

const networkCtx = document
  .getElementById("networkDoughnutChart")
  .getContext("2d");
const networkDoughnutChart = new Chart(networkCtx, {
  type: "doughnut",
  data: {
    labels: ["MTN", "Cell C", "Vodacom", "Telkom", "Other"],
    datasets: [
      {
        label: "Cell Phone Network Used",
        data: [40, 25, 20, 10, 5], // Example data (percentages)
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw + "%";
          },
        },
      },
    },
  },
});

const dataPurchaseCtx = document
  .getElementById("dataPurchasePatternsChart")
  .getContext("2d");
const dataPurchasePatternsChart = new Chart(dataPurchaseCtx, {
  type: "bar",
  data: {
    labels: ["R10 or less", "R11 to R25", "R26 to R50", "More than R50"],
    datasets: [
      {
        label: "Everyday",
        data: [60, 15, 10, 5], // Example data (percentages)
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Once every few days",
        data: [30, 20, 15, 10], // Example data (percentages)
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Once a week",
        data: [20, 25, 20, 15], // Example data (percentages)
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Once every two weeks",
        data: [10, 15, 25, 20], // Example data (percentages)
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "Once a month",
        data: [5, 10, 15, 30], // Example data (percentages)
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
      {
        label: "Other",
        data: [10, 5, 5, 20], // Example data (percentages)
        backgroundColor: "rgba(255, 205, 86, 0.6)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
      x: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
