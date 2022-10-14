const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require("./Deck");
const Round = require('./Round');


class Game {
  constructor() {
    this.roundCount = 0;
    this.currentDeck = [];
  };

  start() {
    const cards = prototypeQuestions.map((dat) => {
      const card = new Card(dat.id, dat.question, dat.answers, dat.correctAnswer);
      return card
    });
    const newDeck = new Deck(cards);
    this.currentDeck = newDeck.contents;
    const newRound = new Round(newDeck);
    this.roundCount ++;
    this.printMessage(newDeck);
    this.printQuestion(newRound);
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards. -----------------------------------------------------------------------`);
  };

  printQuestion(round) {
      util.main(round);
  };
}

module.exports = Game;