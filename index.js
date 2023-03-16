'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

let SecretNumber = Math.floor(Math.random() * 20 + 1);
// console.log(number);
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displaymessage('⛔ No Number!');
  }
  // when plyer win
  else if (guess === SecretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displaymessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess != SecretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > SecretNumber ? '📈 Too High! ' : '📉 Too Low! ';
      displaymessage(guess > SecretNumber ? '📈 Too High! ' : '📉 Too Low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '⛔ You lost the game!';
      displaymessage('⛔ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   // when number is greater
//   else if (guess > SecretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High! ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '⛔ You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   // When number is less
//   else if (guess < SecretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low! ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '⛔You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  SecretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  // document.querySelector('.message').textContent = 'start guessing...';
  displaymessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
