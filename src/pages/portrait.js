import React, { Component} from 'react';
import Header from "../components/header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./portrait.css";
import { FiArrowRight } from 'react-icons/fi';
import Burger from "../components/burger";
import Menu from "../components/burger-menu";


class Portrait extends Component {
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
                <Row className="row"><img id="photo" src="./images/Baller-Sariah.jpg" alt="Baller-Sariah.jpg"></img></Row>
                <Row className="row"><img id="photo" src="./images/Board-Man.jpg" alt="Board-Man.jpg"></img></Row>
                <Row className="row"><img id="photo" src="./images/Strong-Maria.jpg" alt="Strong-Maria.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" src="./images/Anita-Chiefs.jpg" alt="Anita-Chiefs.jpg"></img></Row>
                <Row><img id="photo" src="./images/Anita-Loves-Mum.jpg" alt="Anita-Loves-Mum.jpg"></img></Row>
                <Row><img id="photo" src="./images/Illy-Speechless.jpg" alt="Illy-Speechless.jpg"></img></Row>
                <Row><img id="photo" src="./images/Sisters-Album-Cover.jpg" alt="Sisters-Album-Cover.jpg"></img></Row>
                <Row><img id="photo" src="./images/Valentine-Smiles.jpg" alt="Valentine-Smiles.jpg"></img></Row>
              </Col>
              <Col>
                <Row><img id="photo" src="./images/Sandhya-Profi.jpg" alt="Sandhya-Profi.jpg"></img></Row>
                <Row><img id="photo" src="./images/Jenny-Kitchen-Liiving.jpg" alt="Jenny-Kitchen-Liiving.jpg"></img></Row>
                <Row><img id="photo" src="./images/Skilly.jpg" alt="Skilly.jpg"></img></Row>
                <Row><img id="photo" src="./images/Angry-Alex.jpg" alt="Angry-Alex.jpg"></img></Row>
              </Col>
            </Row>
          </Container>
          <div id="life-nav-div">
            <a id="life-nav" href="/life">Life <FiArrowRight /></a>
          </div>
        </div>
      </div>
    );
  };
};

export default Portrait;