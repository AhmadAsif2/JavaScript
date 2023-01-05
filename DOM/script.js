'use strict';

// selecting an element using querySelector
// console.log(document.querySelector('.message').textContent);

/*
    The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. (Document object Model)

    Document is the starting point of any web page through we
    can access root elements of html) to manipulate html elements (A tree like herarchy)


*/

// Query Selectors
/*
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 17;

document.querySelector('.guess').value = 14;
console.log(document.querySelector('.guess').value);
*/

// Guess the number game logic
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }
  //   When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number You won!!';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    // Manipulating CSS
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
  //   When guess is high
  else if (guess > secretNumber) {
    if (score == 0) {
      document.querySelector('.message').textContent = 'You lose!';
    } else if (score > 1) {
      document.querySelector('.message').textContent = 'Too high number';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // When guess is low
  } else if (guess < secretNumber) {
    if (score == 0) {
      document.querySelector('.message').textContent = 'You lose';
    } else if (score > 1) {
      document.querySelector('.message').textContent = 'Too low number';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

// When pressing again button
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
