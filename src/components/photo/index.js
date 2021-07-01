import React from "react";
import "./style.css";

function Card(props) {
    return(
        <div className="card">{props.text}</div>
    );
};

export default Card;