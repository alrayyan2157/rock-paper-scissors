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
    if (humanChoice == computerChoice){
        console.log(`Both chose ${humanChoice}. Draw!`);
    } else if ((humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "scissors" && computerChoice == "paper")) {
        console.log(`${humanChoice} beats ${computerChoice}. You win this round!`);
        humanScore++;
    } else if ((computerChoice == "rock" && humanChoice == "scissors")||(computerChoice == "paper" && humanChoice == "rock")||(computerChoice == "scissors" && humanChoice == "paper")) {
        console.log(`${computerChoice} beats ${humanChoice}. Computer win this round!`);
        computerScore++;
    } else {
        console.log("Invalid choice");
    }
}

    let humanScore = 0;
    let computerScore = 0;

function playGame(){
    let round = 1;

    while (round < 6){
        console.log(`ROUND : ${round}`)

        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice, humanScore, computerScore);

        round++;
    }

    if (humanScore > computerScore){
        console.log(`You WINS the game with score ${humanScore}`);
    } else if (humanScore < computerScore){
        console.log(`You LOSE the game. Computer had score ${computerScore}`);
    } else {
        console.log(`Both scored ${humanScore}. This game is a DRAW!`)
    }

    humanScore = 0;
    computerScore = 0;
}

playGame();