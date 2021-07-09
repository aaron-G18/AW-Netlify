import React, { Component} from 'react';
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./portrait.css";
import { FiArrowRight } from 'react-icons/fi';
import Burger from "../components/burger";
import Menu from "../components/burger-menu";
import Popup from "../components/image-popup";


class Portrait extends Component {
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
        <div className="content">
          <Container className="image-container">
            <Row className="row">
              <Col>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/Baller-Sariah.jpg" alt="Baller-Sariah.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/Board-Man.jpg" alt="Board-Man.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/Strong-Maria.jpg" alt="Strong-Maria.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Anita-Chiefs.jpg" alt="Anita-Chiefs.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Anita-Loves-Mum.jpg" alt="Anita-Loves-Mum.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Illy-Speechless.jpg" alt="Illy-Speechless.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Sisters-Album-Cover.jpg" alt="Sisters-Album-Cover.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Valentine-Smiles.jpg" alt="Valentine-Smiles.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Sandhya-Profi.jpg" alt="Sandhya-Profi.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Jenny-Kitchen-Liiving.jpg" alt="Jenny-Kitchen-Liiving.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Skilly.jpg" alt="Skilly.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/Angry-Alex.jpg" alt="Angry-Alex.jpg"></img></Row>
              </Col>
            </Row>
          </Container>
          <div id="life-nav-div">
            <a id="life-nav" href="/life">Life <FiArrowRight /></a>
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

export default Portrait;