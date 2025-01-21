import React from "react";

function SignIn() {
  return (
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
        <input name="password" type="password" placeholder="Input password" />
      </div>
      <button className="submit-button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default SignIn;
