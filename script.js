'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
// document.querySelector('.number').style.color = '#fff';

let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', reset);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🤷🏻‍♀️ No number!';
  } else if (guess === secretNumber) {
    win();
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      lost();
    } else {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    }
  }
});

function lost() {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.color = '#e03131';
  document.querySelector('.message').textContent = '😭 You lose!';
  document.querySelector('body').style.backgroundColor = '#f03e3e';
  dimBtn();
}

function win() {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.message').textContent = '👍🏻 Bingo!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
  dimBtn();
}

function dimBtn() {
  document.getElementById('check').disabled = true;
  document.getElementById('check').style.pointerEvents = 'none';
  document.getElementById('check').style.cursor = 'not-allowed';
  document.getElementById('check').style.backgroundColor = '#adb5bd';
  document.getElementById('guess').disabled = true;
}

function reset() {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.getElementById('check').disabled = false;
  document.getElementById('check').style.pointerEvents = 'auto';
  document.getElementById('check').style.cursor = 'pointer';
  document.getElementById('check').style.backgroundColor = '#eee';
  document.getElementById('guess').disabled = false;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
}
