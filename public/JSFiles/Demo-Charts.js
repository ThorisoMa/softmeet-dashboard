const ctx = document.getElementById("genderChart").getContext("2d");
const genderChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Gender",
        data: [50, 40, 10], // Replace with your actual data
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
      },
    },
  },
});

// Double Bar Graph
const ctxProvince = document.getElementById("provinceChart").getContext("2d");
const provinceChart = new Chart(ctxProvince, {
  type: "bar",
  data: {
    labels: [
      "Gauteng",
      "Western Cape",
      "KwaZulu-Natal",
      "Eastern Cape",
      "Free State",
      "Limpopo",
      "Mpumalanga",
      "North West",
      "Northern Cape",
    ],
    datasets: [
      {
        label: "Male", // Replace with relevant label
        data: [60, 70, 50, 40, 30, 80, 45, 55, 25], // Example data
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Female", // Replace with relevant label
        data: [30, 60, 70, 80, 55, 40, 50, 35, 45], // Example data
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
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

// Age Bar Graph
const ctxAgeRange = document.getElementById("ageChart").getContext("2d");
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

// Horizontal Bar Graph for South African Languages
const ctxLanguage = document.getElementById("languagesChart").getContext("2d");
const languageChart = new Chart(ctxLanguage, {
  type: "bar", // Use 'bar' for horizontal chart
  data: {
    labels: [
      "Zulu",
      "Xhosa",
      "Afrikaans",
      "English",
      "Sepedi",
      "Setswana",
      "Tshivenda",
      "Xitsonga",
      "Sesotho",
      "Ndebele",
      "Other",
    ],
    datasets: [
      {
        label: "Percentage",
        data: [40, 50, 60, 70, 93, 80, 20, 30, 100, 10, 50], // Example data
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
          stepSize: 10,
          max: 100,
        },
        title: {
          display: false,
          text: "Percentage",
        },
      },
      y: {
        title: {
          display: true,
          text: "Languages",
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
