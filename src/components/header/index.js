import React from "react";
import Logo from "../../components/logo";
import Navbar from "../../components/navbar";
import "./style.css";

function Header(props) {
    return(
        <header>
            <Logo 
                homePage={props.homePage}
            />
            <Navbar 
                homePage={props.homePage}
                activePage={props.activePage}
            />
        </header>
    );
};

export default Header;