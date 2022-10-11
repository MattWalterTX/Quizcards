const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn1 = new Turn('object', card);
    turn2 = new Turn('taters', card)
  })
  
  it('should take in arguments for a user guess and the current Card', function() {
    expect(turn1.guess).to.equal('object');
  });

  it('should have a method to return the user\'s guess', function () {
    expect(turn1.guess).to.equal('object');
  });

  it('should have a method to return the current card', function() {
    expect(turn1.card).to.equal(card);
  });

  it('should evaluate the current guess to be a boolean', function() {
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should have a method to return feedback for that answer', function() {
    expect(turn1.giveFeedback()).to.equal('Correct!');
    expect(turn2.giveFeedback()).to.equal('Incorrect!');
  });

})