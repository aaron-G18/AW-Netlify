import React, { Component} from 'react';
import Header from "../components/header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./life.css";
import { FiArrowLeft } from 'react-icons/fi';
import Burger from "../components/burger";
import Menu from "../components/burger-menu";
import Popup from "../components/image-popup";

class Life extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homePage: false,
        activePage: "work",
        menuOpen: false,
        imageClicked: "",
        imageClickedAlt: "",
        popupOpen: false
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

  // Function to open popup when you click on an image and to set state with that images src.
  handleImageClick = (e) => {
    e.preventDefault();
    this.setState({imageClicked: e.target.src});
    this.setState({imageClickedAlt: e.target.alt});
    this.setState({popupOpen: true});
  };

  // Function to close the popup when you click the "x."
  closePopup = () => {
    this.setState({
      popupOpen: false,
      imageClicked: "",
      imageClickedAlt: ""
    });
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
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/BLM-Legs.jpg" alt="BLM-Legs.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/Porto-Trainformation.jpg" alt="Porto-Trainformation.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/River-Rocks.jpg" alt="River-Rocks.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/Ghost-Fishing-Edit-test.jpg" alt="Ghost-Fishing-Edit-test.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/No-Messages.jpg" alt="No-Messages.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/BLM-Red-Hat-Man.jpg" alt="BLM-Red-Hat-Man.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Porto-Play-for-Pay.jpg" alt="Porto-Play-for-Pay.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Bad-Biker.jpg" alt="Bad-Biker.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Hauptbahnhof-Nights.jpg" alt="Hauptbahnhof-Nights.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/BLM-Corrupt.jpg" alt="BLM-Corrupt.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Porto-Waiting-for-the-Sun.jpg" alt="Porto-Waiting-for-the-Sun.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Bending-Lakes.jpg" alt="Bending-Lakes.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Texture-Fishing.jpg" alt="Texture-Fishing.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Porto-Bus-Thoughts.jpg" alt="Porto-Bus-Thoughts.jpg"></img></Row>
              </Col>
            </Row>
          </Container>
          <div id="portrait-nav-div">
            <a id="portrait-nav" href="/portrait"><FiArrowLeft /> Portrait</a>
          </div>
        </div> 
        <Popup 
          popupOpen={this.state.popupOpen}
          imageClicked={this.state.imageClicked}
          imageClickedAlt={this.state.imageClickedAlt}
          closePopup={this.closePopup}
        /> 
      </div>
    );
  };
};

export default Life;