// const { createPromptModule } = require("inquirer");
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
    const turn = new Turn(guess, this.gameDeck[this.turnCount]);
    // console.log('turn: ', turn)
    if(turn.evaluateGuess() !== true) {
      this.incorrectGuesses.push(guess)
    };
    turn.giveFeedback();
    if(this.currentRound = this.gameDeck.length) {
      this.endRound()
    };
    this.turnCount ++;
    this.returnCurrentCard();
  }

  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length / this.gameDeck.length)) * 100)
  }

  endRound() {
    return `** Round over! ** You answered ${[this.calculatePercentCorrect()]}% of the questions correctly!`
  }
}

module.exports = Round