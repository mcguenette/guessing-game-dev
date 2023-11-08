'use-strict';

// On load animation
function target(selector, parent = document) {
    return parent.querySelector(selector);
};

function targetAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
};

// the other way we did yesterday it spit out a console error so googled a new way to handle it
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
};
  
let count = 0;
function numberOfGuesses() {
    
};

// Generate a random number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;
let remainingGuesses = 5;

// Get references to HTML elements
const enterGuess = target('#input-number');
const output = target('#message');
const totalGuesses = target('#guesses');
const btnGuess = target('#guess-button');
const playAgain = target('#play-again');

// Add an event listener to the 'Guess' button
btnGuess.onEvent('click', function () {
    if (remainingGuesses > 0) {
        const guess = parseInt(enterGuess.value);

        if (!isNaN(guess)) {
            if (guess === secretNumber) {
                output.textContent = 'Congratulations! You guessed the correct number!';
                btnGuess.disabled = true;
            } else if (guess < secretNumber) {
                output.textContent = 'Try a higher number.';
            } else {
                output.textContent = 'Try a lower number.';
            }

            remainingGuesses--;
            totalGuesses.textContent = remainingGuesses;

            if (remainingGuesses === 0) {
                output.textContent = `Out of guesses! The secret number was ${secretNumber}.`;
                btnGuess.disabled = true;
            }

            enterGuess.value = '';
        }
    }
});

// Add an event listener to the 'Play Again' button
playAgain.addEventListener('click', function () {
    // Reset the game
    secretNumber = Math.floor(Math.random() * 50) + 1;
    remainingGuesses = 5;
    totalGuesses.textContent = remainingGuesses;
    output.textContent = '';
    btnGuess.disabled = false;
    enterGuess.value = '';
});
