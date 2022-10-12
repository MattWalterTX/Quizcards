const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, turn1, turn2, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    turn1 = new Turn('object', card1);
    turn2 = new Turn('object', card2);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(deck.contents[0]);
    round.turnCount ++;
    expect(round.returnCurrentCard()).to.equal(deck.contents[1]);
    round.turnCount ++;
    expect(round.returnCurrentCard()).to.equal(deck.contents[2]);
  })

  it('should increase the turn counter each turn taken', function() {
    expect(round.turnCount).to.equal(0);
    round.takeTurn('potater');
    expect(round.turnCount).to.equal(1);
    round.takeTurn('potater');
    expect(round.turnCount).to.equal(2);
  })

  it('should change the current card to the next card when a turn is taken', function() {
    round.takeTurn('potater');
    expect(round.currentCard).to.equal(card2);
    round.takeTurn('potater');
    expect(round.currentCard).to.equal(card3);
  })

  it('should evaluate the guess and store wrong answers in an array', function() {
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([])
    round.takeTurn('potater');
    expect(round.incorrectGuesses).to.deep.equal(['potater'])
    round.takeTurn('mutator method')
    expect(round.incorrectGuesses).to.deep.equal(['potater'])
  })

  it('should return the appropriate feedback based on the guess', function() {
    round.takeTurn('object');
    // console.log(round.takeTurn('object'))
    expect(turn1.giveFeedback()).to.equal('Correct!')
    round.takeTurn('potater');
    expect(turn2.giveFeedback()).to.equal('Incorrect!')
  })

  it('should calculate and return the amount percentage of correct guesses', function() {
    turn3 = new Turn('potaters', card3);
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');

    expect(round.calculatePercentCorrect()).to.equal(66)

    const round2 = new Round (deck)
    round2.takeTurn('taters');
    round2.takeTurn('beef');
    round2.takeTurn('methods');

    expect(round2.calculatePercentCorrect()).to.equal(0)
  })

  
})