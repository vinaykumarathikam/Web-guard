import React from "react";
import Signup from "./Components/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import Scan from "./Components/Scan";
import Nmap from "./Components/Pages/Nmap";
import Navbar from "./Components/Navbar";
import Sql from "./Components/Pages/Sql";
import Footprint from "./Components/Pages/Footprint";
import Enumerate from "./Components/Pages/Enumerate";
import Main from "./Components/Main";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Main />
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Enumerate />
                  </PrivateRoute>
                }
              />
              <Route
                path="/footprint"
                element={
                  <PrivateRoute>
                    <Footprint />
                  </PrivateRoute>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/scan"
                element={
                  <PrivateRoute>
                    <Scan />
                  </PrivateRoute>
                }
              />
              <Route
                path="/nmap"
                element={
                  <PrivateRoute>
                    <Nmap />
                  </PrivateRoute>
                }
              />
              <Route
                path="/sqlinjection"
                element={
                  <PrivateRoute>
                    <Sql />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
