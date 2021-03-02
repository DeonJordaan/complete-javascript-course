'use strict';

// Selecting Elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
//NOTE SELECTING ELEMENT BY id INSTEAD OF CLASS/ USE #, NOT .PERIOD
const score0Element = document.querySelector('#score--0');
//NOTE SELECTING id WITH getElementById IN STEAD OF querySelector
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0'); //COMMENT WHAT ARE THESE EVEN FOR?
const current1Element = document.getElementById('current--1'); //COMMENT WHAT ARE THESE EVEN FOR?

const diceElement = document.querySelector('.dice');
// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	score0Element.textContent = 0;
	score1Element.textContent = 0;
	current0Element.textContent = 0;
	current1Element.textContent = 0;

	diceElement.classList.add('hidden');
	player0Element.classList.remove('player--winner');
	player1Element.classList.remove('player--winner');
	player0Element.classList.add('player--active');
	player1Element.classList.remove('player--active');
};
init();

const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0Element.classList.toggle('player--active');
	player1Element.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
	if (playing) {
		// 1. Generating a random dice roll
		const dice = Math.trunc(Math.random() * 6) + 1;
		console.log(dice);

		// 2. Display the dice
		diceElement.classList.remove('hidden');
		diceElement.src = `dice-${dice}.png`;

		// 3. Check for rolled 1: if true switch to next player
		if (dice !== 1) {
			// Add dice to current score
			currentScore += dice;
			document.getElementById(
				`current--${activePlayer}`
			).textContent = currentScore;
		} else {
			// Switch to next player
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', function () {
	if (playing) {
		// 1. Add current score to active player's score
		//NOTE activePlayer has a value of either '0' or '1'. Therefor, that value will be inserted into [activePlayer] below, meaning that if current activePlayer is 0, this equals 'scores[0]' ie it will be read as position [0] of the 'scores' array. This is how we link the player to his scores.
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];
		// 2. Check if player's score is >= 100
		if (scores[activePlayer] >= 100) {
			// 3. Finish the game
			playing = false;
			diceElement.classList.add('hidden');

			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active');
		} else {
			// 4. Switch to the next player
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', init);
// currentScore = 0; // RESET CURRENTSCORE
// document.getElementById(
// 	`current--${activePlayer}`
// ).textContent = currentScore; // DISPLAY NEW CURRENTSCORE
// diceElement.classList.add('hidden'); //HIDE DICE
// playing = true;
// activePlayer = 0; //RESET ACTIVE PLAYER TO PLAYER 1
// document
// 	.querySelector(`.player--${activePlayer}`)
// 	.classList.add('player--active');
// document.querySelector(`.player--1`).classList.remove('player--active'); //FIXME SURELY NOT THE BEST SOLUTION
// score[0] -= score[0];
// score[1] -= score[1];
// //TODO

// // document.querySelector('.score')
// // if (activePlayer === 1) {
// // 	activePlayer = 0;
// // }
