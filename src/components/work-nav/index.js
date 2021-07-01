import React from "react";
import "./style.css";

function WorkNav(props) {
    return (
        <div id="work-navigation">
            <a className="work-nav" href={process.env.PUBLIC_URL + "/portrait"}>Portrait</a>
            <a className="work-nav" href={process.env.PUBLIC_URL + "/life"}>Life</a>
        </div>
    );
};

export default WorkNav
