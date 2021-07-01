import React from 'react';
import "./style.css";
import { FiInstagram } from 'react-icons/fi';

const Menu = (props) => {
  return (
    <div id="burger-menu" className={props.menuOpen ? "menu-open" : "menu-closed"}>
      <a className="burger-menu-item" href="/portrait">
        <span role="img" aria-label="about us"></span>
        Portrait
      </a>
      <a className="burger-menu-item" href="/life">
        <span role="img" aria-label="price"></span>
        Life
      </a>
      <a className="burger-menu-item" href="/contact">
        <span role="img" aria-label="contact"></span>
        Contact
      </a>
      <a className="burger-menu-item" href="https://www.instagram.com/1inawilliams_photography/">
      <FiInstagram /></a>
    </div>
  )
}

export default Menu;