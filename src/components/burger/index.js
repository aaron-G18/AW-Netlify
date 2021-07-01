import React from 'react';
import "./style.css";

const Burger = (props) => {
  return (
    <div id="burger" className={props.menuOpen ? "open" : "closed"} onClick={props.onClick}>
      <div id={props.homePage ? "burger-line-light" : "burger-line-dark"} className={props.menuOpen ? "burger-line burger-line-open" : "burger-line burger-line-closed"} />
      <div id={props.homePage ? "burger-line-light" : "burger-line-dark"} className={props.menuOpen ? "burger-line burger-line-open" : "burger-line burger-line-closed"} />
      <div id={props.homePage ? "burger-line-light" : "burger-line-dark"} className={props.menuOpen ? "burger-line burger-line-open" : "burger-line burger-line-closed"} />
    </div>
  )
}

export default Burger;