import Logo from "../components/Logo/Logo";
import {NavLink, Outlet} from "react-router-dom";

import React from "react";

function SignFormContainer() {

    return (
    <div className="wrapper">
        <div className="form-wrapper">
            <div className="header">
                <Logo/>
            </div>
            <div className="form">
                <div className="form-container">
                    <div className="tabs">
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

                    <Outlet />
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignFormContainer;