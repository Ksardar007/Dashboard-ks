import React from "react";
import Chart from "react-apexcharts";

const EmployeeGenderChart = () => {
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Men', 'Women'],
    colors: ['#007bff', '#ff6384'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const chartSeries = [120, 80]; // Example: 120 men, 80 women

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <h3 style={{ textAlign: 'center' }}>Gender-wise Employees</h3>
      <Chart options={chartOptions} series={chartSeries} type="donut" width="100%" />
    </div>
  );
};

export default EmployeeGenderChart;
