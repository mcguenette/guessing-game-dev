'use-strict';

// On load animation
function target(selector, parent = document) {
    return parent.querySelector(selector);
};

function targetAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
};

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
};
  
// Generate a random number between 1 and 50
let secretNumber = generateRandomNumber();
let remainingGuesses = 5;

function generateRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

const enterGuess = target('#input-number');
const output = target('#message');
const totalGuesses = target('#guesses');
const btnGuess = target('#guess-button');
const playAgain = target('#play-again');

// "Guess" button
onEvent('click', btnGuess, handleGuess);

// "Enter" key press
onEvent('keydown', enterGuess, function (event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});

function handleGuess() {
    if (remainingGuesses > 0) {
        const guess = parseInt(enterGuess.value);

        if (!isNaN(guess) && guess >= 1 && guess <= 50) {
            if (guess === secretNumber) {
                output.textContent = 'Congratulations! You guessed the correct number!';
                btnGuess.disabled = true;
            } else if (guess < secretNumber) {
                output.textContent = 'My number is higher';
            } else {
                output.textContent = 'My number is lower';
            }

            remainingGuesses--;
            totalGuesses.textContent = remainingGuesses;

            if (remainingGuesses === 0) {
                output.textContent = `Out of guesses! My number was ${secretNumber}.`;
                btnGuess.disabled = true;
            }

            enterGuess.value = '';
        } else {
            output.textContent = 'Please enter a valid number between 1 and 50.';
        }
    }
        // Disable the "Guess" button when there are no more attempts
        if (remainingGuesses === 0) {
            btnGuess.disabled = true;
        }
};

// "Play Again" button
onEvent('click', playAgain, function () {
    // Reset the game
    secretNumber = generateRandomNumber();
    remainingGuesses = 5;
    totalGuesses.textContent = remainingGuesses;
    output.textContent = '';
    btnGuess.disabled = false;
    enterGuess.value = '';
});
