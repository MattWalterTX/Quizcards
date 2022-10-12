const { createPromptModule } = require("inquirer");
const Deck = require("./Deck");
const Turn = require('./Turn');

class Round {
  constructor(userDeck) {
    this.gameDeck = userDeck.contents;
    this.turnCount = 0;
    this.currentCard = this.gameDeck[0];
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    this.currentCard = this.gameDeck[this.turnCount];
    return this.currentCard
  }

  takeTurn(guess) {
    // console.log('fresh', this.incorrectGuesses)
    const turn = new Turn(guess, this.gameDeck[this.turnCount]);
    if(turn.evaluateGuess() !== true) {
      this.incorrectGuesses.push(guess)
    };
    turn.giveFeedback()
    // console.log(turn.giveFeedback())
    this.turnCount ++;
    this.returnCurrentCard();
  }
  calculatePercentCorrect() {
    console.log((1 - (this.incorrectGuesses.length / this.gameDeck.length)) * 100)
    return Math.floor((1 - (this.incorrectGuesses.length / this.gameDeck.length)) * 100)
  }
}

module.exports = Round