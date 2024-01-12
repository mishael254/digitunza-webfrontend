import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Api from "views/Api";

function ZoneBarGraph() {
  // Use the Api component to get project data from the Redux store
  const { projects } = Api();

  // State to store zone data
  const [zoneData, setZoneData] = useState({
    
    labels: [],
    datasets: [
      {
        label: "Zone Distribution",
        fill: true,
        backgroundColor: gradientStroke,
        hoverBackgroundColor: gradientStroke,
        borderColor: "#d048b6",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: [],
      },
    ],
  });

  // useEffect to calculate zone occurrences
  useEffect(() => {
    const zoneCounts = projects.reduce((acc, project) => {
      const normalizedZone = project.zone.toLowerCase();
      acc[normalizedZone] = (acc[normalizedZone] || 0) + 1;
      return acc;
    }, {});

    // Update state with zone data
    setZoneData((prevData) => ({
      ...prevData,
      labels: Object.keys(zoneCounts),
      datasets: [
        {
          ...prevData.datasets[0],
          data: Object.values(zoneCounts),
        },
      ],
    }));
  }, [projects]);

  return (
    <div className="chart-area">
      <Bar
        data={zoneData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              max: 10, // Adjust the max value based on your data
            },
          },
        }}
      />
    </div>
  );
}

export default ZoneBarGraph;
