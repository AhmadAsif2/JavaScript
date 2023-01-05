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

// Handling Clicks
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log('Not a number!');
  }
});
