const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require("./Deck");
const Turn = require('./Turn');
const Round = require('./Round');


class Game {
  constructor() {
    this.roundCount = 0;
    this.currentDeck = [];
  }
  start(deck) {
    this.currentDeck = deck.contents;
    const newRound = new Round(deck);
    this.roundCount ++;
    this.printMessage(deck);
    this.printQuestion(newRound);
  }

  printMessage(deck, round) {
    return `Welcome to FlashCards! You are playing with ${deck.countCards()} cards. -----------------------------------------------------------------------`
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;