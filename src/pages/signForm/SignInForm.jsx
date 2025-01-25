import React from "react";

import styles from "./SignForm.module.scss";
import stylesApp from "../../scss/app.scss";

function SignIn() {
  return (
    <form className={styles.signInForm}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span className={styles.required}>*</span> Login
        </label>
        <input className={styles.input} name="login" type="text" placeholder="Input login" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <span className={styles.required}>*</span> Password
        </label>
        <input className={styles.input} name="password" type="password" placeholder="Input password" />
      </div>
      <button className={styles.submitButton} type="submit">
        Sign in
      </button>
    </form>
  );
}

export default SignIn;
