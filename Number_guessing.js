// Generate a random number between 1 and 100
const gameNumber = Math.floor(Math.random() * 100) + 1;

// Function to handle user guesses
function guessNumber() {
    let userGuess;
    while (userGuess !== gameNumber) {
        userGuess = parseInt(prompt("Guess the number (between 1 and 100):"));
        
        if (userGuess > gameNumber) {
            alert("Too high! Try again.");
        } else if (userGuess < gameNumber) {
            alert("Too low! Try again.");
        } else if (userGuess === gameNumber) {
            alert("Congratulations! You guessed the correct number.");
        } else {
            alert("Invalid input. Please enter a number.");
        }
    }
}

// Start the game
guessNumber();
