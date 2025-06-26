// Layout.js
import React from "react";
import Sidebar from "./sidebar";
import "./Layout.css";
import { Container, Navbar, Nav, Form , FormControl, Button } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <>
    <Navbar bg="light" expand="lg" className="shadow-sm px-4">
  <Container fluid>
    {/* 🔹 Left: Logo/Title */}
    <Navbar.Brand href="/" className="navbar-title me-auto">
      MyTask Dashboard
    </Navbar.Brand>

    {/* 🔍 Center: Search Bar */}
    <div className="mx-auto" style={{ width: "100%", maxWidth: "500px" }}>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search anything..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
    </div>

    {/* 🔹 Right: Profile Info */}
    <Nav className="ms-auto d-flex align-items-center gap-3">
      <div className="d-flex align-items-center gap-2">
        <div className="text-end me-2">
          <div className="profile-name fw-semibold">Kunal Sardar</div>
          <div className="profile-role text-muted" style={{ fontSize: "0.85rem" }}>
            Admin
          </div>
        </div>
        <img
          src="/i1.jpeg"
          alt="Profile"
          className="rounded-circle"
          width="40"
          height="40"
        />
      </div>
    </Nav>
  </Container>
</Navbar>

      <Sidebar />
      <div className="main-content">
        {children}
      </div>
      <div className="chatbox-widget">
  <div className="chatbox-header">💬 Chat with us</div>
  <div className="chatbox-body">
    <p>Hello! How can we help you?</p>
    <input type="text" placeholder="Type your message..." />
  </div>
</div>

    </>
  );
};

export default Layout;
