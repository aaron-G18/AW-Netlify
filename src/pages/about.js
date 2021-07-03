import React, { Component} from 'react';
import Header from "../components/header";
import Content from "../components/about";
import Burger from "../components/burger";
import Menu from "../components/burger-menu";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: false,
      activePage: "about",
      menuOpen: false
    };
  };

  // Function to toggle 'menuOpen' in state for use as onClick function in burger (hamburger menu)
  setOpen = () => {
    if (this.state.menuOpen === false) {
      this.setState({menuOpen: true})
    } else {
    this.setState({menuOpen: false})
    };
  };


  render() {
    return(
      <div className="about">
        <Header 
          homePage={this.state.homePage}
          activePage={this.state.activePage}
        />
        <Burger 
          menuOpen={this.state.menuOpen}
          onClick={this.setOpen}
          homePage={this.state.homePage}
        />
        <Menu 
          menuOpen={this.state.menuOpen}
        />
        <Content />
      </div>
    );
  };
};

export default About;