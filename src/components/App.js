import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      bestScore: 0
    };
  }
  render() {
    return (
      <div className="background">
        <Header />
      </div>
    );
  }
}

export default App;
