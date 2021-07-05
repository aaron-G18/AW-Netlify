import React from "react";
import "./style.css";

function WorkNav(props) {
    return (
        <div id="work-navigation">
            <a id="portrait-nav-button" className="work-nav" href={process.env.PUBLIC_URL + "/portrait"}>Portrait</a>
            <a id="life-nav-button" className="work-nav" href={process.env.PUBLIC_URL + "/life"}>Life</a>
        </div>
    );
};

export default WorkNav
