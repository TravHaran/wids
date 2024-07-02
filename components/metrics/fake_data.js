export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets: [
        {
            label: "Metric A",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192",
        },
        {
            label: "Metric B",
            data: [3000, 5000, 5500, 8000, 1200, 11000, 15000],
            borderColor: "red",
        },
    ],
};

export const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: "Metric C",
            data: [1200, 300, 150, 800, 100],
            backgroundColor: [
                "rgba(255, 99, 132, 0.4",
                "rgba(54, 162, 235, 0.4",
                "rgba(255, 206, 86, 0.4",
                "rgba(75, 192, 192, 0.4",
                "rgba(153, 102, 255, 0.4",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1",
                "rgba(54, 162, 235, 1",
                "rgba(255, 206, 86, 1",
                "rgba(75, 192, 192, 1",
                "rgba(153, 102, 255, 1",
            ],
            borderWidth: 1,
        },
    ],
};

export const pieChartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
        {
            label: "Metric D",
            data: [120, 60, 30, 90, 45],
            backgroundColor: [
                "rgba(255, 99, 132, 0.8",
                "rgba(54, 162, 235, 0.8",
                "rgba(255, 206, 86, 0.8",
                "rgba(75, 192, 192, 0.8",
                "rgba(153, 102, 255, 0.8",
            ],
            hoverOffset: 6,
        },
    ],
}

