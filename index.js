// This is where your project starts.

// console.log('Your project is running...'); 


const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const util = require('./src/util');

const Turn = require('./src/Turn');
const Card = require('./src/Card');
const Deck = require('./src/Deck');
const Round = require('./src/Round');
const Game = require('./src/Game');

let game = new Game();

function startGame(data) {
  game.start(data);
}

startGame(prototypeQuestions);