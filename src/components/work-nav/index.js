import React from "react";
import "./style.css";

function WorkNav(props) {
    return (
        <div id="work-navigation">
            <div>
            <a id="portrait-nav-button" className="work-nav" href={process.env.PUBLIC_URL + "/portrait"}>Portrait</a>
            <a id="life-nav-button" className="work-nav" href={process.env.PUBLIC_URL + "/life"}>Life</a>
            </div>
            <div>
            <a id="auto-nav-button" className="work-nav" href={process.env.PUBLIC_URL + "/auto"}>Automotive</a>
            </div>
            
        </div>
        
    );
};

export default WorkNav
