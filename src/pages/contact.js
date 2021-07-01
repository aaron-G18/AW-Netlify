import React, { Component} from 'react';
import Header from "../components/header";
import "./contact.css";
import Burger from "../components/burger";
import Menu from "../components/burger-menu";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: false,
      activePage: "contact",
      formSubmitted: false,
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
    return (
      <div>
        <Header 
          activePage={this.state.activePage}
        />
        <Burger 
          menuOpen={this.state.menuOpen}
          onClick={this.setOpen}
        />
        <Menu 
          menuOpen={this.state.menuOpen}
        />
        <div id="contact-form">
          <form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
              <div>
                <label>Your Name: *</label>
              </div>
                <input type="text" id="fname" name="fname" placeholder="First Name" required />
                <input type="text" id="lname" name="lname" placeholder="Last Name" required />
              <div>
                <label>Your Email: *</label>
              </div>
                <input type="email" id="email" name="email" placeholder="john.doe@example.com" required />
              <div>
                <label>Subject: *</label>
              </div>
                <input type="text" id="subject" name="subject" required />
              <div>
                <label>Message: *</label>
              </div>  
                <textarea id="email-message" name="message" required />
              <div>
                <button id="contact-submit" type="submit">Submit</button>
              </div>
              <p>* indicates a required field</p>
          </form>
        </div>
      </div>
    );
  };
};

export default Contact;