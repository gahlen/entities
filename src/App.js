import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './config/Routes.js';
import './App.css';



class App extends Component {

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
export default App;
const container = document.createElement("div");
document.body.appendChild(container);
