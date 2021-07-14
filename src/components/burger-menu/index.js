import React from 'react';
import "./style.css";
import { FiInstagram } from 'react-icons/fi';

const Menu = (props) => {
  return (
    <div id="burger-menu" className={props.menuOpen ? "menu-open" : "menu-closed"}>
      <a id={(props.burgerCurrentPage === "portrait") ? "burgerCurrentPage" : ""} className="burger-menu-item" href="/portrait">
        <span  role="img" aria-label="Portrait">Portrait</span>
      </a>
      <a id={(props.burgerCurrentPage === "life") ? "burgerCurrentPage" : ""} className="burger-menu-item" href="/life">
        <span role="img" aria-label="Life">Life</span>
      </a>
      <a id={(props.burgerCurrentPage === "about") ? "burgerCurrentPage" : ""} className="burger-menu-item" href="/about">
        <span role="img" aria-label="About">About</span>
      </a>
      <a id={(props.burgerCurrentPage === "contact") ? "burgerCurrentPage" : ""} className="burger-menu-item" href="/contact">
        <span role="img" aria-label="Contact">Contact</span>
      </a>
      <a className="burger-menu-item" aria-label="Instagram" href="https://www.instagram.com/1inawilliams_photography/">
      <FiInstagram size={50}/></a>
    </div>
  )
}

export default Menu;