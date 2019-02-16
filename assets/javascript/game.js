var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned a letter
var letterToGuess = null;

var guessesLeft = 10;

var wins = 0;
var losses = 0;

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Computer chose: " + letterToGuess);
};

var updateGuessesSoFar = function() {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(
    ", "
  );
};

var updateGuessesLeft = function() {
  document.getElementById("guesses-left").innerHTML = guessesLeft;
};

var reset = function() {
  guessesLeft = 10;
  guessedLetters = [];
  updateLetterToGuess();
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  updateGuessesSoFar();
};

// var playAgain = () => {
//   guessesLeft=10;
//   guessedLetters = [];
//   updateLetterToGuess();
//   document.getElementById("guesses-left").innerHTML = guessesLeft;
// }

// updateLetterToGuess();

$(document).ready(function() {
  $("#playagain").hide();

  document.getElementById("guesses-left").innerHTML = guessesLeft;

  $("#starter").click(function() {
    $(this).hide();
    // $("#playagain").show();
    reset();
  });

  
  $("#playagain").on("click", function () {
    $(this).hide();
    reset();
  })
});

// This function captures keyboard clicks.
document.onkeydown = function(event) {
  guessesLeft--;
  $("#playagain").hide()

  var letter = String.fromCharCode(event.which).toLowerCase();

  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();

  if (letter === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
    $("#playagain").show();
    alert("Congrats! You guessed the correct letter!")
  }

  if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    $("#playagain").show();
    alert("Not at your most clairvoyant ... try again?")
  }

  for (let i = 0; i < guessedLetters.length; i++) {
    if (letter === guessedLetters[i-1]) {
      guessedLetters.pop();
      guessesLeft++;
      alert("You have already chosen this letter.");
    }
  }
};
