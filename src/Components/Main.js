import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Main() {
  const { currentUser, logout } = useAuth();
  const [name, setname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
      alert(error);
    }
  }
  useEffect(() => {
    if (currentUser) {
      setname(currentUser.email);
    } else {
      setname("");
    }
  }, [currentUser]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">WEB GUARD</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginLeft: 1000 }}>
            <NavDropdown title={name} id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Button variant="link" onClick={handleLogout}>
                  Log Out
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Main;
