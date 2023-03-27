'use strict';
const message = document.querySelector('.message');
const guessNumber = document.querySelector('.guess');
const score = document.querySelector('.score');
const botton = document.querySelector('.check');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');
let highestscore = 0;
let num = Math.floor(Math.random() * 20);
let guessValue = -1;
let noOfMove = 20;
function fun() {
  guessValue = document.querySelector('.guess').value;
  if (num > guessValue) {
    message.innerHTML = 'value is low';
    noOfMove--;
  } else if (num < guessValue) {
    message.innerHTML = 'value is greater';
    noOfMove--;
  } else {
    message.innerHTML = 'correct value';
    document.querySelector('.number').innerHTML = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (noOfMove > highestscore) highestscore = noOfMove;
    highscore.innerHTML = highestscore;
  }
  score.innerHTML = noOfMove;
}

function playAgain() {
  num = Math.floor(Math.random() * 20);
  guessValue = -1;
  noOfMove = 20;
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  guessNumber.value = '';
  message.innerHTML = 'start guess...';
  score.innerHTML = noOfMove;
}
botton.addEventListener('click', fun);

again.addEventListener('click', playAgain);
