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
      gameOver: false,
      win: false
    };
  }

  //start over button Handler function
  //reset all values except for bestScore
  //set all the display properties to false

  //checkWinnerFunction
  //checks whether the current score has reached 10. If reached 10, then game, change state value win to true--> win

  //checkScoreFunction(indx)
  //have to check if the targeted img has been displayed before by checking its display value
  //if display value is true && score isn't 10, game over, set bestScore to CurrentScore (only if the currentScore is greater than the bestScore ), set gameOver to true --> will display the loser alert
  //else, increment the score to +1 and change the display of that indx to true
  //call checkWinnerFunction
  checkScoreFunction(indx) {
    console.log(BookArray[indx].display);
  }

  noBtnHander = indx => {
    this.checkScoreFunction(indx);
  };

  //yesBtnHandler
  //call check ScoreFunction

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
