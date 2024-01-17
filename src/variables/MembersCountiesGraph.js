// MembersCountiesGraph.js
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Api from "views/Api";

const MembersCountiesGraph = () => {
  const { members } = Api();

  // Initialize state for chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Members Count",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(29,140,248,0.2)",
        borderColor: "#1f8ef1",
        borderWidth: 2,
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Map county names and corresponding member counts
    const countyNames = Array.from(new Set(members.map((member) => member.county)));
    const membersCountByCounty = countyNames.map((county) =>
      members.filter((member) => member.county === county).length
    );

    // Update chart data state
    setChartData((prevData) => ({
      ...prevData,
      labels: countyNames,
      datasets: [
        {
          ...prevData.datasets[0],
          fill: true,
          backgroundColor: "rgba(29,140,248,0.2)",
          borderColor: "#1f8ef1",
          borderWidth: 2,
          data: membersCountByCounty,
        },
      ],
    }));
  }, [members]);

  // Chart options
  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      x: {
        gridLines: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="chart-area" >
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default MembersCountiesGraph;
