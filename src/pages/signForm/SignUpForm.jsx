import React from "react";
import styles from "./SignForm.module.scss";
import Tabs from "../../components/Tabs/Tabs";
import Logo from "../../components/Logo/Logo";

function SignUp() {
  return (
      <div className={styles.wrapper}>
          <div className="form-wrapper">
              <div className={styles.header}>
                  <Logo/>
              </div>
              <div className={styles.form}>
                  <div className={styles.formContainer}>
      <Tabs />
         <form className={styles.signUpForm}>
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
          <div className={styles.formGroup}>
              <label className={styles.label}>
                  <span className={styles.required}>*</span> Password confirmation
              </label>
              <input className={styles.input} name="password" type="password" placeholder="Input password again" />
          </div>
          <button className={styles.submitButton} type="submit">
              Sign up
          </button>
      </form>
          </div>
      </div>
          </div>
      </div>


  );
}

export default SignUp;
