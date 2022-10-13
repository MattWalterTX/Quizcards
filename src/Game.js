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
  start(data) {
    const cards = [];
    data.map((dat) => {
      const card = new Card(dat.id, dat.question, dat.answers, dat.correctAnswer);
      cards.push(card);
    });
    // console.log(cards)
    const newDeck = new Deck(cards);
    this.currentDeck = newDeck.contents;
    // console.log(newDeck);
    const newRound = new Round(newDeck);
    this.roundCount ++;
    // console.log(this.printMessage(newDeck));
    this.printMessage(newDeck);
    // console.log(newRound);
    this.printQuestion(newRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards. -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;