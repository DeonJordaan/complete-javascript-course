'use strict';

// console.log(document.querySelector('.message').textContent);

// //NOTE manipulating the value of an element. See value in CL before and after this line
// document.querySelector('.message').textContent = 'Correct number!';

// console.log(document.querySelector('.message').textCo-ntent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//NOTE SELECTING A RANDOM NUMBER (random), WITHOUT DECIMALS (trunc), BELOW 20 (*20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //NOTE STATE VARIABLE: SCORE IS PART OF THE APPLICATION STATE. ALL THE DATA RELEVANT TO THE APPLICATION
let highscore = 0;

//NOTE PASSING A FUNCTION DIRECTLY INTO AN addEventListener METHOD
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  //NOTE NO INPUT WILL MEAN 'GUESS' = FALSE. THE (!) CONVERTS IT TO TRUE IN ORDER TO EXECUTE THE CODE
  // WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // WHEN GUESS IS CORRECT
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💩 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💩 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//TODO CODING CHALLENGE

// 1. COMPARE SCORE TO HIGHSCORE & ADJUST THE HIGH SCORE IF REQUIRED
// 2. CLEAR THE NUMBER BOX
// 3. OBSCURE THE SECTRET NUMBER
// 4. RESET THE DISPLAY TEXT
// 5. RESET FUNCTIONALITY NEEDS TO BE POSSIBLE WHETHER PLAYER WINS OR LOSES...OR ANY TIME?
// 6. ADD AN EVENT LICTENER TO THE AGAIN BUTTON
