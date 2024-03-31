export const pieData = {
    labels: ["News", "Likes", "Comments", "Views"],
    datasets: [
      {
        label: "Total",
        data: [12, 50, 30, 80],
        backgroundColor: ["#fdba74", "#fda4af", "#86efac", "#a5b4fc"],
        borderColor: ["#ea580c", "#e11d48", "#16a34a", "#4f46e5"],
        borderWidth: 1,
      },
    ],
  };
  
  export const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total likes",
        data: [48, 32, 39, 53, 41, 49],
        fill: true,
        backgroundColor: "rgb(255, 228, 230, 0.4)",
        borderColor: "#e11d48",
      },
      {
        label: "Total comments",
        data: [38, 38, 34, 35, 45, 34],
        fill: false,
        borderColor: "#16a34a",
      },
    ],
    
  };
  
  export const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "News Published",
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(0, 0, 0, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 2,
        data: [12, 6, 8, 15, 17, 11, 16],
      },
    ],
  };
  
  
  
  export const doughnutData = {
    labels: [
      "Health",
      "Sports",
      "Science",
      "General",
      "Entertainment",
      "Business",
      "Technology"
    ],
    datasets: [
      {
        label: "Total news",
        data: [5, 14, 12, 24, 18, 16],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };