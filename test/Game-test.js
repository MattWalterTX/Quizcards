const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let card1, card2, card3, turn1, turn2, deck, round1, round2, game;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    turn1 = new Turn('object', card1);
    turn2 = new Turn('object', card2);
    deck = new Deck([card1, card2, card3]);
    round1 = new Round(deck);
    round2 = new Round (deck);
    game = new Game(deck);

  })

  it.skip('should keep track of the current round', function() {
    
    expect(game.roundCount).to.equal(0);
  })

  it.skip('should create a deck of the cards with provided data', function() {
    game.start(deck);

    expect(game.currentDeck).to.deep.equal([card1, card2, card3]);
  })

  it.skip('should create a new round using the deck', function() {

    expect(game.roundCount).to.equal(0);
    game.start(deck);

    expect(game.roundCount).to.equal(1);
  })

  it.skip('should invoke and display our printMessage in the CLI', function() {
    game.start(deck);
    
    expect(game.printMessage(deck, round1)).to.equal(`Welcome to FlashCards! You are playing with 3 cards. -----------------------------------------------------------------------`)
  })

 
})