import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm px-4">
      <span className="navbar-brand mb-0 h1">Dashboard</span>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a href="#" className="nav-link">Notifications</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
