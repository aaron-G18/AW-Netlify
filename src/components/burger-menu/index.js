import React from 'react';
import "./style.css";
import { FiInstagram } from 'react-icons/fi';

const Menu = (props) => {
  return (
    <div id="burger-menu" className={props.menuOpen ? "menu-open" : "menu-closed"}>
      <a className="burger-menu-item" href="/portrait">
        <span role="img" aria-label="Portrait"></span>
        Portrait
      </a>
      <a className="burger-menu-item" href="/life">
        <span role="img" aria-label="Life"></span>
        Life
      </a>
      <a className="burger-menu-item" href="/about">
        <span role="img" aria-label="About"></span>
        About
      </a>
      <a className="burger-menu-item" href="/contact">
        <span role="img" aria-label="Contact"></span>
        Contact
      </a>
      <a className="burger-menu-item" aria-label="Instagram" href="https://www.instagram.com/1inawilliams_photography/">
      <FiInstagram size={50}/></a>
    </div>
  )
}

export default Menu;