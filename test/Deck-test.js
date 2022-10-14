const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1, card2, card3, turn1, turn2, deck;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    turn1 = new Turn('object', card1);
    turn2 = new Turn('taters', card2);
    deck = new Deck([card1, card2, card3]);
  })

  it('should be able to hold cards', function() {
    expect(deck.contents.length).to.deep.equal(3);
  });

  it('should know how many cards it contains', function() {
    expect(deck.countCards()).to.equal(3);
  });
})