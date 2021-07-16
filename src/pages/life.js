import React, { Component} from 'react';
import Header from "../components/header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./photo-pages-style.css";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Burger from "../components/burger";
import Menu from "../components/burger-menu";
import Popup from "../components/image-popup";

class Life extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homePage: false,
        activePage: "work",
        burgerCurrentPage: "life",
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
          burgerCurrentPage={this.state.burgerCurrentPage}
        />
        <div className="content">
          <Container className="image-container">
            <Row className="row">
              <Col>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/life/BLM-Legs.jpg" alt="BLM-Legs.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Trainformation.jpg" alt="Porto-Trainformation.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/life/River-Rocks.jpg" alt="River-Rocks.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/life/Ghost-Fishing-Edit-test.jpg" alt="Ghost-Fishing-Edit-test.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/life/No-Messages.jpg" alt="No-Messages.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/BLM-Red-Hat-Man.jpg" alt="BLM-Red-Hat-Man.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Play-for-Pay.jpg" alt="Porto-Play-for-Pay.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/Bad-Biker.jpg" alt="Bad-Biker.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/Hauptbahnhof-Nights.jpg" alt="Hauptbahnhof-Nights.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/BLM-Corrupt.jpg" alt="BLM-Corrupt.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Waiting-for-the-Sun.jpg" alt="Porto-Waiting-for-the-Sun.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/Bending-Lakes.jpg" alt="Bending-Lakes.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/Texture-Fishing.jpg" alt="Texture-Fishing.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Bus-Thoughts.jpg" alt="Porto-Bus-Thoughts.jpg"></img></Row>
              </Col>
            </Row>
          </Container>
          

          <Container className="mobile-container">
          
            <Row xs>
              <Col ><img id="photo" onClick={this.handleImageClick} src="./images/life/BLM-Legs.jpg" alt="BLM-Legs.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/BLM-Corrupt.jpg" alt="BLM-Corrupt.jpg"></img></Col>
            </Row>

            


            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/BLM-Red-Hat-Man.jpg" alt="BLM-Red-Hat-Man.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Bad-Biker.jpg" alt="Bad-Biker.jpg"></img></Col> 
            </Row>
            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Bending-Lakes.jpg" alt="Bending-Lakes.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/River-Rocks.jpg" alt="River-Rocks.jpg"></img></Col>
            </Row>

            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Standing-Tall.jpeg" alt="Standing-Tall.jpeg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Love.jpeg" alt="Porto-Love.jpeg"></img></Col> 
            </Row>


            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Ghost-Fishing-Edit-test.jpg" alt="Ghost-Fishing-Edit-test.jpg"></img></Col>  
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Texture-Fishing.jpg" alt="Texture-Fishing.jpg"></img></Col>
            </Row>

            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Waiting-for-the-Sun.jpg" alt="Porto-Waiting-for-the-Sun.jpg"></img></Col>
              <Col ><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Trainformation.jpg" alt="Porto-Trainformation.jpg"></img></Col>
               
            </Row>
            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Bus-Thoughts.jpg" alt="Porto-Bus-Thoughts.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Porto-Play-for-Pay.jpg" alt="Porto-Play-for-Pay.jpg"></img></Col>
            </Row>
            
            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/life/Hauptbahnhof-Nights.jpg" alt="Hauptbahnhof-Nights.jpg"></img></Col>
              
            </Row>
          </Container>
        </div> 
        <div>
        
        <div id="left-nav-div">
          <a className="lower-nav-link" href="/portrait"><FiArrowLeft /> Portrait</a>
        </div>
        <div id="right-nav-div">
          <a className="lower-nav-link" href="/auto">Auto <FiArrowRight /></a>
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