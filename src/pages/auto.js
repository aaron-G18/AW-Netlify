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

class Auto extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homePage: false,
        activePage: "work",
        burgerCurrentPage: "auto",
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
      <div className="auto">
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
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-1.jpg" alt="438-Spider-1.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-2.jpg" alt="438-Spider-2.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-1.jpg" alt="Caddy-1.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-4.jpg" alt="Caddy-4.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-1.jpg" alt="Falcon-1.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-2.jpg" alt="Falcon-2.jpg"></img></Row>
              </Col>
              
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-5.jpg" alt="438-Spider-5.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-3.jpg" alt="438-Spider-3.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-3.jpg" alt="Caddy-3.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-5.jpg" alt="Caddy-5.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-4.jpg" alt="Falcon-4.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-3.jpg" alt="Falcon-3.jpg"></img></Row>
              </Col>
            </Row>
          </Container>
          

          <Container className="mobile-container">
          
            <Row xs>
              <Col ><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-1.jpg" alt="438-Spider-1.jpg"></img></Col>
              
            </Row>

            


            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-5.jpg" alt="438-Spider-5.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-3.jpg" alt="438-Spider-3.jpg"></img></Col> 
            </Row>

            <Row xs>
            <Col ><img id="photo" onClick={this.handleImageClick} src="./images/auto/438-Spider-2.jpg" alt="438-Spider-2.jpg"></img></Col>
            </Row>

            <Row xs>
            <Col ><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-1.jpg" alt="Caddy-1.jpg"></img></Col>
            </Row>


            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-3.jpg" alt="Caddy-3.jpg"></img></Col>  
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-4.jpg" alt="Caddy-4.jpg"></img></Col>
            </Row>

            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/Caddy-5.jpg" alt="Caddy-5.jpg"></img></Col>
              
               
            </Row>
            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-1.jpg" alt="Falcon-1.jpg"></img></Col>
              
            </Row>
            
            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-2.jpg" alt="Falcon-2.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-4.jpg" alt="Falcon-4.jpg"></img></Col>
            </Row>
            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/auto/Falcon-3.jpg" alt="Falcon-3.jpg"></img></Col>
              
            </Row>


          </Container>
        </div> 
        <div>
        
        <div id="left-nav-div">
          <a className="lower-nav-link" href="/life"><FiArrowLeft /> Life</a>
        </div>
        <div id="right-nav-div">
          <a className="lower-nav-link" href="/portrait">Portrait <FiArrowRight /></a>
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

export default Auto;