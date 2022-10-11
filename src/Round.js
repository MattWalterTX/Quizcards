const { createPromptModule } = require("inquirer");
const Deck = require("./Deck");
const Turn = require('./Turn');

class Round {
  constructor(userDeck) {
    this.gameDeck = userDeck.contents;
    this.turnCount = 0;
    this.currentCard = {};
  }
  returnCurrentCard() {
    this.currentCard = this.gameDeck[this.turnCount];
    return this.currentCard
  }

  takeTurn(guess) {
    this.turnCount ++;
    // console.log(guess, this.gameDeck[this.turnCount])
    const turn = new Turn(guess, this.gameDeck[this.turnCount]);
    // console.log(this.turnCount)
    return turn

  }
}

module.exports = Round