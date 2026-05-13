function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getHumanChoice() {
    let hchoice = prompt("Enter your choice (ROCK, PAPER, SCISSORS) :");
    return hchoice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == computerChoice){
        console.log(`Both chose ${humanChoice}. Draw!`);
    } else if ((humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")) {
        console.log(`${humanChoice} beats ${computerChoice}. You win this round!`);
        humanScore++;
    } else if ((computerChoice == "rock" && humanChoice == "scissors")||(computerChoice == "paper" && humanChoice == "rock")||(computerChoice == "scissors" && humanChoice == "paper")) {
        console.log(`${computerChoice} beats ${humanChoice}. Computer win this round!`);
        computerScore++;
    }
}

