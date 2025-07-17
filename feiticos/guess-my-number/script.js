'use strict';
/*
const text = document.querySelector('.message').textContent;
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('No number!');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game!');
    }
  }
  // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   }
  // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   }
  // }
});
// reiniciando o game sem recarregar a página
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // location.reload() --- jeito alternativo de fazer o jogo reiniciar.
});
