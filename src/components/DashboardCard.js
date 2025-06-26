import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5>{title}</h5>
            <h3>{value}</h3>
          </div>
          <div style={{ fontSize: "2rem" }}>{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
