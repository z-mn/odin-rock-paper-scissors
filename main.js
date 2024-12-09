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
            console.log("Error! Try again!");
        }
    }
    return humanChoice;
}

console.log(getHumanChoice());