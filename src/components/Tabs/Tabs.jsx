import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import styles from "./Tabs.module.scss";

function Tabs() {

    return (


                    <div className={styles.tabs}>
                        <NavLink
                            to="/signup"
                            className={({isActive}) => (isActive ? "active" : "")}
                        >
                            Sign Up
                        </NavLink>

                        <NavLink
                            to="/signin"
                            className={({isActive}) => (isActive ? "active" : "")}
                        >
                            Sign In
                        </NavLink>
                    </div>
    )
}

export default Tabs;