let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = "";
    randNum = Math.floor(Math.random() * 3)
    // console.log(randNum)
    switch (randNum) {
        case 0:
            computerChoice = "rock";
        break;
        case 1:
            computerChoice = "paper";
        break;
        case 2:
            computerChoice = "scissor";
        break;
    }
    return computerChoice;
}

function getHumanChoice(){
    let userChoice = prompt("Enter choice: ").toLowerCase();
    // console.log(userChoice);
    return userChoice;
}

// getHumanChoice();

function playRound(humanChoice, computerChoice){
    let winner;
    console.log("humanChoice: " + humanChoice)
    console.log("computerChoice: " + computerChoice)
    if(humanChoice === computerChoice){
        return "draw";
    } else if(humanChoice == "rock" && computerChoice == "scissor"){
        humanScore++
        winner = "Human"
    } else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        winner = "Human"
    } else if(humanChoice == "scissor" && computerChoice == "paper"){
        humanScore++
        winner = "Human"
    } else {
        computerScore++
        winner = "Computer"
    }
    // console.log("Human: " + humanScore)
    // console.log("Computer: " + computerScore)
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human: " + humanScore)
        console.log("Computer: " + computerScore)
    }
    if(humanScore === computerScore){
        console.log("Draw")
    } else if(humanScore > computerScore){
        console.log("Human wins!")
    } else {
        console.log("Computer wins!")
    }
}

playGame()