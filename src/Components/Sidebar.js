import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Dashboard.css";

const Side = (props) => {
  return (
    <>
      <Nav
        className="col-md-2 d-none d-md-block bg-dark sidebar"
        activeKey="/home"
        variant="tabs"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <p></p>
        <Nav.Item style={{ backgroundColor: "black" }}>
          <Nav.Link href="/footprint">Footprinting</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/enumerate">Enumeration</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/scan">Scanning Networks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/dos">Denial of Service</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/sqlinjection">SQL Injection</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
const Sidebar = Side;
export default Sidebar;
