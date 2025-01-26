import React from "react";

import styles from "./SignForm.module.scss";
import Logo from "../../components/Logo/Logo";
import Tabs from "../../components/Tabs/Tabs";

function SignIn() {
  return (
      <div className={styles.wrapper}>
          <div className="form-wrapper">
              <div className={styles.header}>
                  <Logo/>
              </div>
              <div className={styles.form}>
                  <div className={styles.formContainer}>
                      <Tabs />
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
                </div>
            </div>
          </div>
      </div>

  );
}

export default SignIn;
