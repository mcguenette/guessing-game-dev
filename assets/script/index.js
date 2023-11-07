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
  

const output = target('#message');
const totalGuesses = target('#guesses');
const enterGuess = target('#input-number');
let count = 0;
function numberOfGuesses() {
    
};

