import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import SignIn from "./pages/SignInForm.jsx";
import SignUp from "./pages/SignUpForm.jsx";
import Logo from "./components/Logo.jsx";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="header">
            <Logo />
          </div>
          <div className="form">
            <div className="form-container">
              <div className="tabs">
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Sign Up
                </NavLink>

                <NavLink
                  to="/signin"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Sign In
                </NavLink>
              </div>

              <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<SignIn />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
