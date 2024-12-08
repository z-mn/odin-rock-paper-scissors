function getComputerChoice() {
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            const computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("What is your option? ");
}