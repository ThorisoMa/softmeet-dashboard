const ctx = document.getElementById("myPieChart").getContext("2d");

const data = {
  labels: ["Completed", "Partial"],
  datasets: [
    {
      label: "Total Responses",
      data: [60, 40],
      backgroundColor: ["#36A2EB", "#FF6384"],
      hoverBackgroundColor: ["#2B609CFF", "#CC3D5CFF"],
    },
  ],
};

const myPieChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        position: "top",
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

// guage-chart
const ctxGauge = document.getElementById("myGaugeChart").getContext("2d");

const gaugeNeedle = {
  id: "gaugeNeedle",
  afterDatasetsDraw(chart, args, plugins) {
    const { ctx, data } = chart;

    ctx.save();
    const xCenter = chart.getDatasetMeta(0).data[0].x;
    const yCenter = chart.getDatasetMeta(0).data[0].y;
    const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
    const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
    const widthNeedle = (outerRadius - innerRadius) / 2;
    const radius = 5;
    const angle = Math.PI / 180;

    const needleValue = data.datasets[0].needleValue;

    const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
    const circumference =
      ((chart.getDatasetMeta(0).data[0].circumference /
        Math.PI) / data.datasets[0].data[0]) *
      needleValue;

    ctx.translate(xCenter, yCenter);
    ctx.rotate(Math.PI * (circumference + 1.5))

    //needle
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "darkblue";
    ctx.lineWidth = 3;
    ctx.moveTo(0 - radius, 0);
    ctx.lineTo(0, 0 - innerRadius - widthNeedle);
    ctx.lineTo(0 + radius, 0);
    ctx.stroke();
    ctx.fill();

    //dot
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, angle * 360, true);
    ctx.fill();

    ctx.restore();
  },
};

const gaugeChart = new Chart(ctxGauge, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [25, 25, 25, 25], // Adjust this value for the gauge reading
        backgroundColor: ["#C9022DFF", "#E4BB06FF", "#D6EC0AFF", "#18A106FF"], // Colors for the gauge sections
        borderColor: "#FFFFFF",
        borderWidth: 2,
      },
    ],
  },
  options: {
    circumference: 57 * Math.PI,
    rotation: -28 * Math.PI,
    cutout: "70%",
    needleValue: 50,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Performance Gauge",
    },
    animation: {
      duration: 800, // Adjust as needed
    },
  },
  plugins: [gaugeNeedle],
});

// Area Line Chart
const ctxArea = document.getElementById("myAreaChart").getContext("2d");
const areaChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Completed",
      data: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "#36A2EB",
      tension: 0.1,
    },
    {
      label: "Partial",
      data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 95],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "#FF6384",
      tension: 0.1,
    },
  ],
};

const myAreaChart = new Chart(ctxArea, {
  type: "line",
  data: areaChartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 25,
        },
      },
      x: {
        title: {
          display: false,
          text: "Months",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return (
              tooltipItem.dataset.label + ": " + tooltipItem.raw + " responses"
            );
          },
        },
      },
    },
  },
});
