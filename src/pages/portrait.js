import React, { Component} from 'react';
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./photo-pages-style.css";
import { FiArrowRight, FiArrowLeft} from 'react-icons/fi';
import Burger from "../components/burger";
import Menu from "../components/burger-menu";
import Popup from "../components/image-popup";


class Portrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: false,
      activePage: "work",
      burgerCurrentPage: "portrait",
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
      <div className="portrait">
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
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Baller-Sariah.jpg" alt="Baller-Sariah.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Board-Man.jpg" alt="Board-Man.jpg"></img></Row>
                <Row className="row"><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Strong-Maria.jpg" alt="Strong-Maria.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Anita-Chiefs.jpg" alt="Anita-Chiefs.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Anita-Loves-Mum.jpg" alt="Anita-Loves-Mum.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Illy-Speechless.jpg" alt="Illy-Speechless.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Sisters-Album-Cover.jpg" alt="Sisters-Album-Cover.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Valentine-Smiles.jpg" alt="Valentine-Smiles.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Sandhya-Profi.jpg" alt="Sandhya-Profi.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Jenny-Kitchen-Liiving.jpg" alt="Jenny-Kitchen-Liiving.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Skilly.jpg" alt="Skilly.jpg"></img></Row>
                <Row><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Angry-Alex.jpg" alt="Angry-Alex.jpg"></img></Row>
              </Col>
            </Row>
          </Container>


          <Container className="mobile-container">
          <Row xs> 
          <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Anita-Chiefs.jpg" alt="Anita-Chiefs.jpg"></img></Col>
          </Row>

            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Baller-Sariah.jpg" alt="Baller-Sariah.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Board-Man.jpg" alt="Board-Man.jpg"></img></Col>
            </Row>
            <Row xs>
              
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Anita-Loves-Mum.jpg" alt="Anita-Loves-Mum.jpg"></img></Col>
            </Row>
            <Row xs>
              
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Strong-Maria.jpg" alt="Strong-Maria.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Sandhya-Profi.jpg" alt="Sandhya-Profi.jpg"></img></Col>
            </Row>      
            <Row xs> 
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Jenny-Kitchen-Liiving.jpg" alt="Jenny-Kitchen-Liiving.jpg"></img></Col>
          </Row>      
            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Valentine-Smiles.jpg" alt="Valentine-Smiles.jpg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Skilly.jpg" alt="Skilly.jpg"></img></Col>
            </Row>
                    
            <Row xs>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Illy-Speechless.jpg" alt="Illy-Speechless.jpg"></img></Col>
            </Row>        
            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Falcon-Frauen.jpeg" alt="Falcon-Frauen.jpeg"></img></Col>
              <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Sisters-Album-Cover.jpg" alt="Sisters-Album-Cover.jpg"></img></Col>
            </Row>
            

            <Row xs>
            <Col><img id="photo" onClick={this.handleImageClick} src="./images/portrait/Angry-Alex.jpg" alt="Angry-Alex.jpg"></img></Col>
            </Row>
          </Container>
        </div>
        <div>
        
        <div id="left-nav-div">
          <a className="lower-nav-link" href="/auto"><FiArrowLeft /> Automotive</a>
        </div>
        <div id="right-nav-div">
          <a className="lower-nav-link" href="/life">Life <FiArrowRight /></a>
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