import React, { Component} from 'react';
import Header from "../components/header";
import WorkNav from "../components/work-nav"
import Burger from "../components/burger";
import Menu from "../components/burger-menu";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: true,
      activePage: "work",
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
      <div className="home">
        <div id="fade"></div>
        <img id="background" src="./images/life/River-Rocks.jpg" alt="background of river rocks"></img>
        <Header 
          homePage={this.state.homePage}
          activePage={this.state.activePage}
        />
        <WorkNav />
        <Burger 
          menuOpen={this.state.menuOpen}
          onClick={this.setOpen}
          homePage={this.state.homePage}
        />
        <Menu 
          menuOpen={this.state.menuOpen}
        />
      </div>
    );
  };
};

export default Home;