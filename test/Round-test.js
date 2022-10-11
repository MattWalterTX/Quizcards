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

  it('should create a new turn instance when a guess is made', function() {
    round.takeTurn('potater')
    console.log
    expect(round.takeTurn('potater')).to.be.an.instanceOf(Turn);
  })
})