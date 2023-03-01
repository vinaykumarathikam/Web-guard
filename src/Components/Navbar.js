import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
import { Nav } from "react-bootstrap";
import "./Navbar.css";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { currentUser } = useAuth();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  }, [currentUser]);

  return (
    <>
      <Nav variant="tabs" className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Nav>
    </>
  );
}

export default Navbar;
