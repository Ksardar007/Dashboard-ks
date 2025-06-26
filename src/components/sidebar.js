import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">MyTask</h3>
      <nav className="sidebar-nav">
        <NavLink to="/" end className="nav-item">Dashboard</NavLink>
        <NavLink to="/projects" className="nav-item">Projects</NavLink>
        <NavLink to="/employees" className="nav-item">Employees</NavLink>
        <NavLink to="/tickets" className="nav-item">Tickets</NavLink>
      </nav>
    </div>
  );
};

export default sidebar;
