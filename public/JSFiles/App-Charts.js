// Horizontal Bar Graph for
const ctxLanguage = document
  .getElementById("appInstallFreqChart")
  .getContext("2d");
const languageChart = new Chart(ctxLanguage, {
  type: "bar", // Use 'bar' for horizontal chart
  data: {
    labels: [
      "Often",
      "Hardly Ever",
      "Only Sometimes",
      "Pretty Much Never",
      "Other",
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

const installedAppsCtx = document
  .getElementById("installedAppsChart")
  .getContext("2d");
const installedAppsChart = new Chart(installedAppsCtx, {
  type: "pie",
  data: {
    labels: [
      "FNB Banking",
      "Snapchat",
      "Capitec Banking",
      "Facebook Lite",
      "Facebook Messenger",
      "Opera Mini Browser",
      "Instagram",
      "ShareIt",
      "Twitter",
      "Joox Music",
      "Facebook",
      "Opera News",
      "WhatsApp",
      "Facebook Messenger Lite",
      "TikTok",
    ],
    datasets: [
      {
        label: "Installed Apps",
        data: [10, 15, 8, 12, 10, 7, 14, 6, 5, 11, 9, 10, 3, 4, 5], // Example data
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
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

const importantFactorsBarCtx = document
  .getElementById("importantFactorsChart")
  .getContext("2d");
const importantFactorsBarChart = new Chart(importantFactorsBarCtx, {
  type: "bar",
  data: {
    labels: [
      "Storage Size",
      "Privacy Concerns",
      "Data Usage",
      "Download Size",
      "Usage Duration",
      "Other",
    ],
    datasets: [
      {
        label: "Importance Level (0-100)",
        data: [90, 85, 80, 70, 60, 40], // Example data (importance levels)
        backgroundColor: "rgba(75, 192, 192, 0.6)",
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
        stepSize: 10,
        max: 100,
        title: {
          display: true,
          text: "Importance Level",
        },
      },
      x: {
        title: {
          display: true,
          text: "Factors",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
  },
});
