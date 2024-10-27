function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let answer = options[Math.floor(Math.random() * 3)];
  alert("Computer has chosen " + answer);
  return answer;
}

function getHumanChoice() {
  let answer = prompt("Please enter rock, paper, or scissors: ").toLowerCase();

  if (answer === "rock" || answer === "paper" || answer === "scissors") {
    alert("You have chosen " + answer);
    return answer;
  } else {
    alert("Invalid response, please enter your choice again.");
    return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      alert("It's a Tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore += 1;
      alert("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore += 1;
      alert("You lose! " + computerChoice + " beats " + humanChoice);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  alert("Final Score:\nYou: " + humanScore + "\nComputer: " + computerScore);

  if (humanScore > computerScore) {
    alert("Congratulations! You won the game.");
  } else if (humanScore < computerScore) {
    alert("You lost the game. Better luck next time!");
  } else {
    alert("The game is a tie!");
  }
}

playGame();
