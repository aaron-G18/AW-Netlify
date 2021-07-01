import React from "react";
import "./style.css";
import { FiInstagram } from 'react-icons/fi';


function Navbar(props) {
    return(
        <div className="navigation">
            <ul id="navbar">
                <li><a className={props.homePage ? "white" : "dark"} id={props.activePage === "work" ? "active" : "inactive"} href="/">Work</a></li>
                <li><a className={props.homePage ? "white" : "dark"} id={props.activePage === "about" ? "active" : "inactive"} onClick={props.onClick} href="/about">About</a></li>
                <li><a className={props.homePage ? "white" : "dark"} id={props.activePage === "contact" ? "active" : "inactive"} href="/contact">Contact</a></li>
                <li><a className={props.homePage ? "white" : "dark"} href="https://www.instagram.com/1inawilliams_photography/" id="ig-icon"><FiInstagram /></a></li>
            </ul>
        </div>
    );
};

export default Navbar;