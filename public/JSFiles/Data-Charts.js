// Horizontal Bar Graph for 
const ctxLanguage = document
  .getElementById("notHavingDataChart")
  .getContext("2d");
const languageChart = new Chart(ctxLanguage, {
  type: "bar", // Use 'bar' for horizontal chart
  data: {
    labels: [
      "I Always Have Data",
      "Everyday",
      "Every Few Days",
      "Once A Week",
      "A Few Times A Month",
      "Hardly Ever",
    ],
    datasets: [
      {
        label: "Percentage",
        data: [40, 50, 60, 70, 93, 80], // Example data
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
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
          stepSize: 20,
          max: 100,
        },
        title: {
          display: false,
          text: "Percentage",
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

const dataPurchaseTimeCtx = document
  .getElementById("dataPurchaseTimeChart")
  .getContext("2d");
const dataPurchaseTimeChart = new Chart(dataPurchaseTimeCtx, {
  type: "bar",
  data: {
    labels: [
      "One Week",
      "Few Days",
      "Few Hours",
      "One Day",
      "One Month",
      "Never",
    ],
    datasets: [
      {
        label: "Percentage",
        data: [15, 25, 35, 20, 5, 50], // Example data (percentages)
        backgroundColor: "rgba(75, 192, 192, 0.6)",
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
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

const missedActivitiesCtx = document
  .getElementById("missedActivitiesChart")
  .getContext("2d");
const missedActivitiesChart = new Chart(missedActivitiesCtx, {
  type: "pie", // Use 'doughnut' for a doughnut chart
  data: {
    labels: [
      "Social Media",
      "Sports News",
      "Messaging",
      "News",
      "Email",
      "Watching Videos/Listening to Music",
      "Other",
    ],
    datasets: [
      {
        label: "Activities Missed Without Data",
        data: [20, 15, 25, 10, 5, 20, 5], // Example data
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
