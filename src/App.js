import React, { BootStrap, Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navBar">
            <ul className="list">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
              <li>
                <button>Social</button>
              </li>
            </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="hero">
            <h1 className="name">Brandon Turner</h1>
            <h2 className="title">Full Stack Web Developer</h2>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
