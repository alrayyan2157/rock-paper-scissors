function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getHumanChoice() {
    let hchoice = prompt("Enter your choice (ROCK, PAPER, SCISSORS) :");
    return hchoice;
}

