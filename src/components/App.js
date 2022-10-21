import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";
import Main2 from "./Main.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      bestScore: 0
    };
  }

  noBtnHander(indx) {
    console.log(indx);
  }

  render() {
    return (
      <div className="background">
        <Header
          score={this.state.score}
          bestScore={this.state.bestScore}
        ></Header>
        <Main2 updateScore={this.noBtnHander} />
      </div>
    );
  }
}

export default App;
