import React, { Component} from 'react';
import Header from "../components/header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./life.css";
import { FiArrowLeft } from 'react-icons/fi';
import Burger from "../components/burger";
import Menu from "../components/burger-menu";

class Life extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homePage: false,
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
      <div className="life">
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
        <div className="content">
          <Container className="image-container">
            <Row className="row">
              <Col>
                <Row className="row"><img id="photo" src="./images/BLM-Legs.jpg" alt="BLM-Legs.jpg"></img></Row>
                <Row className="row"><img id="photo" src="./images/Porto-Trainformation.jpg" alt="Porto-Trainformation.jpg"></img></Row>
                <Row className="row"><img id="photo" src="./images/River-Rocks.jpg" alt="River-Rocks.jpg"></img></Row>
                <Row className="row"><img id="photo" src="./images/Ghost-Fishing-Edit-test.jpg" alt="Ghost-Fishing-Edit-test.jpg"></img></Row>
                <Row className="row"><img id="photo" src="./images/No-Messages.jpg" alt="No-Messages.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" src="./images/BLM-Red-Hat-Man.jpg" alt="BLM-Red-Hat-Man.jpg"></img></Row>
                <Row><img id="photo" src="./images/Porto-Play-for-Pay.jpg" alt="Porto-Play-for-Pay.jpg"></img></Row>
                <Row><img id="photo" src="./images/Bad-Biker.jpg" alt="Bad-Biker.jpg"></img></Row>
                <Row><img id="photo" src="./images/Hauptbahnhof-Nights.jpg" alt="Hauptbahnhof-Nights.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" src="./images/BLM-Corrupt.jpg" alt="BLM-Corrupt.jpg"></img></Row>
                <Row><img id="photo" src="./images/Porto-Waiting-for-the-Sun.jpg" alt="Porto-Waiting-for-the-Sun.jpg"></img></Row>
                <Row><img id="photo" src="./images/Bending-Lakes.jpg" alt="Bending-Lakes.jpg"></img></Row>
                <Row><img id="photo" src="./images/Texture-Fishing.jpg" alt="Texture-Fishing.jpg"></img></Row>
                <Row><img id="photo" src="./images/Porto-Bus-Thoughts.jpg" alt="Porto-Bus-Thoughts.jpg"></img></Row>
              </Col>
            </Row>
          </Container>
          <div id="portrait-nav-div">
            <a id="portrait-nav" href="/portrait"><FiArrowLeft /> Portrait</a>
          </div>
        </div>  
      </div>
    );
  };
};

export default Life;