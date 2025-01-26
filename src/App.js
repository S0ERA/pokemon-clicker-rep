import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SignIn from "./pages/signForm/SignInForm.jsx";
import SignUp from "./pages/signForm/SignUpForm.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


      </Routes>
    </Router>
  );
}

export default App;
