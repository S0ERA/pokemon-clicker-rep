import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SignIn from "./pages/signForm/SignInForm.jsx";
import SignUp from "./pages/signForm/SignUpForm.jsx";
import SignFormContainer from "./pages/SignFormContainer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignFormContainer />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
