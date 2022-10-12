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
    // console.log('updated', this.incorrectGuesses)
    this.turnCount ++;
    this.returnCurrentCard();
    return turn

  }
}

module.exports = Round