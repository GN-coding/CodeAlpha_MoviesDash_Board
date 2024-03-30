// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// BAR CHART
const barChartData = {
  series: [
    {
      name: "Thriller",
      data: [200, 150, 180, 220, 190], 
    },
    {
      name: "Action",
      data: [180, 170, 200, 190, 210], 
    },
  ],
  chart: {
    type: "bar",
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ["#2962ff", "#d50000"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"],
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "Viewership",
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartData
);
barChart.render();

// AREA CHART
const areaChartData = {
  series: [
    {
      name: "Thriller Viewership",
      data: [100, 120, 150, 140, 160, 200, 180], 
    },
    {
      name: "Action Viewership",
      data: [90, 110, 130, 120, 140, 180, 160], 
    },
  ],
  chart: {
    type: "area",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ["#00ab57", "#d50000"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: [
    {
      title: {
        text: "Viewership",
        style: {
          color: "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
};

const areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartData
);
areaChart.render();

// PIE CHART
const pieChartData = {
  series: [30, 20, 25, 15, 10], // Sample data for movie genres distribution
  labels: ["Action", "Thriller", "Comedy", "Drama", "Sci-Fi"],
  colors: ["#d50000", "#2962ff", "#ff6d00", "#ff4081", "#00bcd4"],
  chart: {
    type: "donut",
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    colors: ["transparent"],
  },
  tooltip: {
    theme: "dark",
  },
};

const pieChart = new ApexCharts(
  document.querySelector("#pie-chart"),
  pieChartData
);
pieChart.render();
