function getComputerChoice(){
    let computerChoice = "";
    randNum = Math.floor(Math.random() * 3)
    console.log(randNum)
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