// Task: Number Guessing Game
// Description: You are tasked with creating a number guessing game. The program will generate a random number between 1 and 100, and the user has to guess the number within a certain number of attempts. Use the following guidelines:

// Generate a random number between 1 and 100 and store it in a variable.
// Initialize a variable to keep track of the number of attempts made by the user.
// Prompt the user to enter their guess.
// Convert the user's input from string to a number.
// Check if the guess is correct. If it is, display a success message with the number of attempts made and terminate the program.
// If the guess is incorrect, provide feedback to the user (e.g., "Too high!" or "Too low!").
// Repeat steps 3-6 until the user guesses the correct number or reaches the maximum number of attempts.
// If the user exceeds the maximum number of attempts, display a failure message with the correct number.

// Number Guessing Game
console.log("=== Number Guessing Game ===");
console.log("I have chosen a number between 1 and 100. Can you guess it?");

const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
const maxAttempts = 5; // Maximum number of attempts
let attempts = 0; // Counter for attempts

while (attempts < maxAttempts) {
  attempts++;
  const guess = parseInt(prompt(`Enter your guess (attempt ${attempts}):`), 10); // Convert user's input to a number

  if (guess === randomNumber) {
    console.log(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
    break; // Exit the loop if the guess is correct
  } else if (guess < randomNumber) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }
}

if (attempts === maxAttempts) {
  console.log(`Game over. The correct number was ${randomNumber}.`);
}

