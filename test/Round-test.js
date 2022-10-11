const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', function() {
  let card, turn, deck, round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    turn1 = new Turn('object', card);
    turn2 = new Turn('taters', card);
    deck = new Deck([card1, card2, card3]);
    round = new Round('some stuff here')
  })

  it('should be a round', function() {
    console.log(turn1, card1)
    expect(round).to.equal('some other stuff here')
  })

})