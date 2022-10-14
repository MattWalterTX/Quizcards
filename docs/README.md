# Quizcards

## Abstract
  - This app loads a set of flashcards with multiple choice and true/ false questions to test basic Javascript knowledge. The deck has 3 cards to go through and at the end will return a message with the user's percent of correct answers. If the user's score is below 90%, the round will restart so that you can hone your vocabulary and understanding!

## Technologies
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Illustrations
  ![Quizcards](https://drive.google.com/file/d/1rOurrtLU73I5RfcwabGtPLMuRy0ARxUM/view?usp=sharing)


## Features
- On load the game will automatically load a deck of cards from the data provided and display the first cards question
- User accuracy is returned at the end of the round when all cards have been attempted.
- Upon completion, the game will automatically restart the round if the user's score is below 90%
- App runs entirely in the CLI

## Possible Future Extensions
- Add multiple card data sets to choose from
- Add a round timer
- Allow choice to review of the incorrect card items at the end of a round OR start restart the round fresh

## Milestones
- This project gave great insights to writing code using Test Driven Development 
- As a module repeater, I was personally amazed at how much i was able to accomplish without help this time

## Challenges 
- Milestones aside, when I did need help i was totally lost on how to proceed. I had issues running the app initially due to an error in my Round class's takeTurn method that allowed my tests to pass and allowed node to run the app even though selected answers were being entered as undefined thus creating a never ending game loop

### Set Up
1. Clone the repo
   ```sh
   git clone git@github.com:MattWalterTX/Quizcards.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ``` 
3. Begin a game in the CLI with node
   ```sh
   node index.js
   ``` 
4. Either enter an answer number or use the up/ down arrow, then press enter to select your answers.

## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [YouTube](https://www.youtube.com/)

## Contributors
  - [Matt Walter](https://github.com/MattWalterTX)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/flash-cards.html)
 