import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";
import Main2 from "./Main.js";
import { BookArray } from "./BookArray.js";
import { Alert } from "react-bootstrap";

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
  startOver = () => {
    for (let i = 0; i < BookArray.length; i++) {
      BookArray[i].display = false;
    }
    this.setState({ score: 0, gameOver: false, win: false });
  };

  //checkWinnerFunction
  //checks whether the current score has reached 10. If reached 10, then game, change state value win to true--> win
  checkWinnerFunction = () => {
    if (this.state.score === 10) {
      if (this.state.score > this.state.bestScore) {
        this.setState({ bestScore: this.state.score, win: true });
      } else {
        this.setState({ win: true });
      }
    }
  };
  //checkScoreFunction(indx)
  //have to check if the targeted img has been displayed before by checking its display value
  //if display value is true && score isn't 10, game over, set bestScore to CurrentScore (only if the currentScore is greater than the bestScore ), set gameOver to true --> will display the loser alert
  //else, increment the score to +1 and change the display of that indx to true
  //call checkWinnerFunction
  checkScoreFunction = (indx, userAnswer) => {
    if (this.state.score !== 10 && userAnswer !== BookArray[indx].display) {
      if (this.state.score > this.state.bestScore) {
        this.setState({ bestScore: this.state.score, gameOver: true });
      } else {
        this.setState({ gameOver: true });
      }
    } else if (BookArray[indx].display === userAnswer) {
      this.checkWinnerFunction();
      this.setState({ score: this.state.score + 1 });
    }

    BookArray[indx].display = true;
  };

  //call check ScoreFunction
  noBtnHander = indx => {
    this.checkScoreFunction(indx, false);
  };

  ////yesBtnHandler
  //call check ScoreFunction
  yesBtnHandler = indx => {
    this.checkScoreFunction(indx, true);
  };

  render() {
    return (
      <div className="background">
        <Header
          score={this.state.score}
          bestScore={this.state.bestScore}
        ></Header>
        {this.state.win && (
          <Alert className="alert" key="success" variant="success">
            You have a great Memory!! You won!!
          </Alert>
        )}
        {this.state.gameOver && (
          <Alert className="alert" key="warning" variant="warning">
            Oh No! You Lost!
          </Alert>
        )}
        <Main2
          noBtnHander={this.noBtnHander}
          yesBtnHandler={this.yesBtnHandler}
          startOver={this.startOver}
        />
      </div>
    );
  }
}

export default App;
