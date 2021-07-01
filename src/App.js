import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Life from "./pages/life";
import Portrait from "./pages/portrait";
import About from "./pages/about";
import Contact from "./pages/contact";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "value",
    };
  };
  
  
  render() {
    return(
      <div>
        <Router>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/life"} component={Life} />
              <Route exact path={process.env.PUBLIC_URL + "/portrait"} component={Portrait} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            </Switch>
        </Router>
      </div>
    );
  };
};


export default App;
