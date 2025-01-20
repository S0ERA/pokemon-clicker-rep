import React from "react";

import Pokemon from "./assets/img/pokemon.png";
import Clicker from "./assets/img/clicker.png";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <ul className="logo">
          <li>
            <img className="pokemon" src={Pokemon} alt="pokemon" />
          </li>
          <li>
            <img className="clicker" src={Clicker} alt="clicker" />
          </li>
        </ul>
      </div>

      <div className="form-container">
        <form className="sign-in-form">
          <div className="form-group">
            <label>
              <span className="required">*</span> Login
            </label>
            <input name="login" type="text" placeholder="Input login" />
          </div>
          <div className="form-group">
            <label>
              <span className="required">*</span> Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Input password"
            />
          </div>
          <button className="submit-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
