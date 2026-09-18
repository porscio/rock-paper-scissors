function getComputerChoice() {
  let generated_value = Math.floor(Math.random() * 3);
  switch (generated_value) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt(
    "Enter your choice...rock or paper or scissors: ",
  ).toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    //Tie Case
    if (humanChoice == computerChoice) {
      return console.log(`It's a tie!. Both selected ${humanChoice}.`);
    }
    // Rock beats Scissors
    if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore += 1;
      return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore += 1;
      return console.log(
        `Computer wins! ${computerChoice} beats ${humanChoice}.`,
      );
    }
    //Scissors beats Paper
    if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore += 1;
      return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore += 1;
      return console.log(
        `Computer wins! ${computerChoice} beats ${humanChoice}.`,
      );
    }
    // Paper beats rock
    if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore += 1;
      return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore += 1;
      return console.log(
        `Computer wins! ${computerChoice} beats ${humanChoice}.`,
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(
      `Final Result - You won! You beat computer with a score of ${humanScore} `,
    );
  } else if (computerScore > humanScore) {
    console.log(`Final Result - You lost! Computer scored ${computerScore} `);
  } else {
    console.log(`Final Result - It's a tie. Both scored ${humanScore} `);
  }
}
playGame();
