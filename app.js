function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to determine the winner of a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = computerPlay();
        const roundResult = playRound(playerChoice, computerChoice);

        resultDiv.textContent = roundResult;
    });
});