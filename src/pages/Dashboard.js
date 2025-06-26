// src/pages/Dashboard.js
import React from "react";
import EmployeeGenderChart from "../components/EmployeeGenderChart";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import "./Dashboard.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {
  // Line Chart: Employees
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Employees Info",
        data: [10, 20, 30, 40, 50, 60, 70],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.3
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Monthly Employees Report"
      }
    }
  };

  // Bar Chart: Top Hiring Scores
  const barData = {
    labels: ["John", "Priya", "David", "Ayesha", "Tom", "Anjali"],
    datasets: [
      {
        label: "Hiring Score",
        data: [88, 94, 72, 85, 90, 79],
        backgroundColor: [
          "#4bc0c0",
          "#36a2eb",
          "#9966ff",
          "#ff6384",
          "#ff9f40",
          "#66bb6a"
        ]
      }
    ]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Top Hiring Scores"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <Container  className="dashboard-container bg-dark">
      <h2 className="dashboard-title"style={{color: 'white'}} >Dashboard</h2>

      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h5 className="card-title">Applications</h5>
              <p className="card-text">1546</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h5 className="card-title">Interviews</h5>
              <p className="card-text">246</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h5 className="card-title">Hired</h5>
              <p className="card-text">101</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <h5 className="card-title">Resigned</h5>
              <p className="card-text">12</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Employee Availability Box */}
      <Card className="shadow-sm availability-card">
  <Card.Body>
    <h5 className="mb-4">Employee Availability</h5>
    <Row>
      <Col xs={6} md={3} className="availability-item present">
        <strong>Attendance:</strong>
        <div className="availability-count">125</div>
      </Col>
      <Col xs={6} md={3} className="availability-item late">
        <strong>Late Coming:</strong>
        <div className="availability-count">18</div>
      </Col>
      <Col xs={6} md={3} className="availability-item absent">
        <strong>Absent:</strong>
        <div className="availability-count">9</div>
      </Col>
      <Col xs={6} md={3} className="availability-item leave">
        <strong>Leave Apply:</strong>
        <div className="availability-count">6</div>
      </Col>
    </Row>
  </Card.Body>
</Card>




      {/* Line Chart */}
      <Card className="shadow-sm chart-card mb-4">
        <Card.Body>
          <h5 className="mb-4">Employees Chart</h5>
          <div className="chart-container">
            <Line data={lineData} options={lineOptions} />
          </div>
        </Card.Body>
      </Card>

      {/* Bar Chart */}
      <Card className="shadow-sm chart-card mb-4">
        <Card.Body>
          <h5 className="mb-4">Top Hiring Score</h5>
          <div className="chart-container">
            <Bar data={barData} options={barOptions} />
          </div>
        </Card.Body>
      </Card>

      {/* Donut Chart: Gender Split */}
      <Card className="shadow-sm chart-card">
        <Card.Body>
          <EmployeeGenderChart />
        </Card.Body>
      </Card>
    </Container>

    
  );
};

export default Dashboard;
