function getComputerChoice() {
    let computerChoice = "";
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice(humanChoice = "") {
    let check = 0;
    while (check === 0) {
        humanChoice = prompt("What is your option?");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            check++;
        } else {
            console.log("Not a valid value! Try again!");
        }
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You picked ${humanChoice}; computer picked ${computerChoice}`);
    switch (true) {
        case (humanChoice == computerChoice):
            console.log("It's a draw!");
            break;
        case ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')):
            console.log("You win!");
            humanScore++;
            break;
        case ((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'scissors' && humanChoice == 'paper') || (computerChoice == 'paper' && humanChoice == 'rock')):
            console.log("You lose!");
            computerScore++;
            break;
    }
    return;
}

function playGame() {
    for (let i=1; i < 6; i++) {
        console.log(`Round ${i}!`);
        let computerVal = getComputerChoice();
        let humanVal = getHumanChoice();
        playRound(humanVal, computerVal);
    }
    console.log(`You got: ${humanScore}`);
    console.log(`Computer got: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("You are the loser!");
    } else {
        console.log("It's a tie!");
    }
    return;
}

let humanScore = 0;
let computerScore = 0;
playGame();