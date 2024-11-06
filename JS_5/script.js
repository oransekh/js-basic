// Selecting elements
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

// Initial scores
let computerScore = 0;
let userScore = 0;

// Choices array for the computer
const arryComputer = ["rock", "paper", "scissors"];

// Function for computer to pick a random choice
function computer() {
    const randomNumber = Math.floor(Math.random() * 3);
    const newA = arryComputer[randomNumber];
    return newA; // return the choice for use in playGame
}

// Function to play the game
function playGame(userChoice) {
    const computerPlay = computer(); // get computer choice

    if (computerPlay === userChoice) {
        resultText.innerText = `It's a draw! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerPlay === 'scissors') ||
        (userChoice === 'scissors' && computerPlay === 'paper') ||
        (userChoice === 'paper' && computerPlay === 'rock')
    ) {
        userScore++;
        userScoreSpan.innerText = userScore;
        resultText.innerText = `You win! ${userChoice} beats ${computerPlay}.`;
    } else {
        computerScore++;
        computerScoreSpan.innerText = computerScore;
        resultText.innerText = `You lose! ${computerPlay} beats ${userChoice}.`;
    }
}

// Adding event listeners to each choice
choices.forEach(choice => {
    choice.addEventListener('click', () => playGame(choice.id));
});
