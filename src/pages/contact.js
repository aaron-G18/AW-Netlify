import React, { Component} from 'react';
import Header from "../components/header";
import "./contact.css";
import Burger from "../components/burger";
import Menu from "../components/burger-menu";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: false,
      activePage: "contact",
      burgerCurrentPage: "contact",
      formSubmitted: false,
      menuOpen: false,
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.subject === "" || this.state.message === "") {
      alert("Please fill in all required fields")
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .catch(error => alert(error));
      this.setState({
        formSubmitted: true, 
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

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
          burgerCurrentPage={this.state.burgerCurrentPage}
        />
        {this.state.formSubmitted ? 
          (<p id="submitted-message">Thank you for your message!</p>) : ""}
        <div id="contact-form">
          <form name="contact" onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
              <div>
                <label>Your Name: *</label>
              </div>
                <input type="text" id="fname" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required />
                <input type="text" id="lname" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}required />
              <div>
                <label>Your Email: *</label>
              </div>
                <input type="email" id="email" name="email" placeholder="john.doe@example.com" value={this.state.email} onChange={this.handleChange} required />
              <div>
                <label>Subject: *</label>
              </div>
                <input type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange} required />
              <div>
                <label>Message: *</label>
              </div>  
                <textarea id="email-message" name="message" value={this.state.message} onChange={this.handleChange} required />
              <div>
                <button id="contact-submit" type="submit" onClick={this.handleSubmit}>Submit</button>
              </div>
              <p>* indicates a required field</p>
          </form>
        </div>
      </div>
    );
  };
};

export default Contact;