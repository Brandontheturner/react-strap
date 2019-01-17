import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-2">Brandon Turner</h1>
        <p className="lead">Full Stack Web Developer</p>
        <hr className="my-2" />
        <p>
          <ul>
            <li className="html5">HTML5</li>
            <li>CSS3</li>
            <li>javaScript</li>
            <li>Git/GitHub</li>
            <li>React</li>
            <li>BootStrap</li>
          </ul>
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#!" role="button">
            Click Me!!
          </a>
        </p>
        <span class="badge badge-warning">Warning</span>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React-Strap
            </a>
            <span className="badge badge-danger">
              <p>Danger Will Robinson</p>
            </span>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
