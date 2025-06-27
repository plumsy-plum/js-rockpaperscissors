
function getComputerChoice() {
    let result = "";
    let num = Math.floor(Math.random() * 3);

    if (num < 1) {
        return (result = "paper");
    }

    else if (num < 2) 
        return (result = "rock");
    
    else {
        return (result = "scissors");
    }
}

function getHumanChoice() {
    let x;

    while(true) {
        x = prompt("ENTER : ROCK or SCISSOR or PAPER =>  ").toLowerCase();

        if (x === 'rock' || x === 'paper' || x === 'scissors') {
            break;
        }
        console.log("invalid");

    }
    console.log(x)
    return x;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        console.log("its a tie");
    }

    else if(humanChoice=='rock' && computerChoice=='scissor' || humanChoice=='scissor' && computerChoice=='paper' || humanChoice=='paper' && computerChoice=='rock') {
        console.log('lessssgoooo you won');
        humanScore++;
        return;
    }

    else {
        console.log('computer won , you loser');
        computerScore++;
        return;
    }

}

function playGame() {


    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore < computerScore) {
        console.log("loser bohoo");
    }
    else if(humanScore > computerScore) {
        console.log("winner");

    }
    else{
        console.log("tie ");
    }
}

playGame();



