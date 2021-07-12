import React from "react";
import "./style.css";

function Popup(props) {
    return(
        <div className={props.popupOpen ? "black-out" : "popup-hidden"}>
            <div className="popup">
                <span className="close-image" onClick={props.closePopup}>&#10005;</span>
                <img className="popup-img" alt={props.imageClickedAlt} src={props.imageClicked}></img>
            </div>
        </div>
    );
};

export default Popup;