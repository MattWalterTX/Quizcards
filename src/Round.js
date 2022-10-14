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
    this.currentCard = this.gameDeck[this.turnCount];
    return this.currentCard
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.gameDeck[this.turnCount]);
    // console.log('turn: ', turn)
    if(turn.evaluateGuess() !== true) {
      this.incorrectGuesses.push(guess);
    };
    // console.log('curr round: ', this.turnCount)
    // console.log(this.gameDeck.length)
    this.turnCount ++;
    // if(this.turnCount === this.gameDeck.length) {
    //   return this.endRound()
    // };
    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length / this.gameDeck.length)) * 100)
  }

  endRound() {
    if(this.calculatePercentCorrect() >= 90){
    return `** Round over! ** You answered ${[this.calculatePercentCorrect()]}% of the questions correctly!`
    } else {
      console.log(`** Round over! ** Looks like you could use some more practice! You only answered ${[this.calculatePercentCorrect()]}% of the questions correctly. Let\'s try that again!`);
      this.turnCount = 0;
      this.currentCard = this.gameDeck[0];
      this.incorrectGuesses = [];
      console.log()
    }
  }
}

module.exports = Round