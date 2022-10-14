// const { createPromptModule } = require("inquirer");
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Deck = require("./Deck");
const Turn = require('./Turn');
// const index = require('./index')

class Round {
  constructor(userDeck) {
    this.gameDeck = userDeck.contents;
    this.turnCount = 0;
    this.currentCard = this.gameDeck[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    if(turn.evaluateGuess() !== true) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    this.turnCount ++;
    this.currentCard = this.gameDeck[this.turnCount];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length / this.gameDeck.length)) * 100)
  }

  endRound() {
    const Game = require('./Game');
    if(this.calculatePercentCorrect() <= 90) {
      console.log(`** Round over! ** Looks like you could use some more practice! You only answered ${[this.calculatePercentCorrect()]}% of the questions correctly. Let\'s try that again!`);
      const game = new Game();
      game.start()
    } else {
    console.log(`** Round over! ** You answered ${[this.calculatePercentCorrect()]}% of the questions correctly!`)
    }
  }
}

module.exports = Round