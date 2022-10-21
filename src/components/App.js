import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";
import Main2 from "./Main.js";
import { BookArray } from "./BookArray.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      bestScore: 0,
      endGame: false
    };
  }

  noBtnHander(indx) {
    console.log(BookArray[indx].display);
    //have to check if the targeted img has been displayed before by checking its display value
    //if display value is true, game over, set bestScore to the curent score and end game to true
    //else, increment the score to +1
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
