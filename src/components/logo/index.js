import React from "react";
import "./style.css";

function Logo(props) {
    return(
        <div className="logo-container">
            <a href="/">
                <img className={props.homePage ? "logo-animated" : "logo"} src="./images/logo.png" alt="Logo"></img>
            </a>
        </div>
    );
};

export default Logo;