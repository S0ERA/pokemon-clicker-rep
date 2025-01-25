import React from "react";

function SignUp() {
  return (
    <form className="sign-up-form">
      <div className="form-group">
        <label>
          <span className="required">*</span> Username
        </label>
        <input name="username" type="text" placeholder="Input username" />
      </div>
      <div className="form-group">
        <label>
          <span className="required">*</span> Email
        </label>
        <input name="email" type="email" placeholder="Input email" />
      </div>
      <div className="form-group">
        <label>
          <span className="required">*</span> Password
        </label>
        <input name="password" type="password" placeholder="Input password" />
      </div>
      <button className="submit-button" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
