var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned a letter
var letterToGuess = null;

var guessesLeft = 10;

var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
  document.querySelector("#guesses-left").text = guessesLeft;
};

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Computer chose: " + letterToGuess);
};

var updateGuessesSoFar = function() {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

var reset = function() {
  // guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

// This function captures keyboard clicks.
document.onkeydown = function(event) {
  guessesLeft--;

  var letter = String.fromCharCode(event.which).toLowerCase();

  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();


  if (letter === letterToGuess) {

    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  }

  if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }
};