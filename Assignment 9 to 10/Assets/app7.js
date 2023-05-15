// Generate random number between 1 and 10 (inclusive)
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the number
const guess = parseInt(prompt("Guess a number between 1 and 10"));

// Check if the guess is correct
if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
  alert("Close enough to the correct answer");
} else {
  alert("Sorry, that's incorrect");
}
