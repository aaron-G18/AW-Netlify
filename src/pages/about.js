import React, { Component} from 'react';
import Header from "../components/header";
import Content from "../components/about";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: false,
      activePage: "about"
    };
  };


  render() {
    return(
      <div className="about">
        <Header 
          homePage={this.state.homePage}
          activePage={this.state.activePage}
        />
        <Content />
      </div>
    );
  };
};

export default About;