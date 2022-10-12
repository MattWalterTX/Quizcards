const { createPromptModule } = require("inquirer");
const Deck = require("./Deck");
const Turn = require('./Turn');

class Round {
  constructor(userDeck) {
    this.gameDeck = userDeck.contents;
    this.turnCount = 0;
    this.currentCard = this.gameDeck[0];
  }
  returnCurrentCard() {
    this.currentCard = this.gameDeck[this.turnCount];
    return this.currentCard
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.gameDeck[this.turnCount]);
    this.turnCount ++;
    this.returnCurrentCard();
    return turn

  }
}

module.exports = Round