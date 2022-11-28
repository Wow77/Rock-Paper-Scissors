
console.log("Welcome to Rock, Paper and Scissor game.\nSelect your option: \n1.Rock  2.Paper  3.Scissor");

//Computer playing function
/*
function getComputerChoice(){
    const choiceNumber = Math.floor(Math.random()*3);
    const computerOptions = ['Rock','Paper','Scissor'];
    const computerChoice = computerOptions[choiceNumber];
    return computerChoice; 
}
*/

function getComputerChoice() {
    let choiceNumber = Math.random()*3;
    if (choiceNumber <= 0.3333) {
      return "Paper";
    } else if (choiceNumber >= 0.6666) {
      return "Rock";
    } else {
      return "Scissor";
    }
  }

const computerSelection = getComputerChoice();

//One round play funciton
function playRound(X,Y){
    //The player selects his/her option
let playerSelection = prompt("Enter your option:");
//Deciding the winner
if (playerSelection === computerSelection) {
    console.log("Its a Draw!");
} else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
    console.log("You lost! Paper beats Rock");
} else if (playerSelection == 'Rock' && computerSelection == 'Scissor'){
    console.log("You won! Rock beats Scissor");
}else if (playerSelection == 'Paper' && computerSelection == 'Scissor') {
    console.log("You lost! Scissor beats Paper");
} else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
    console.log("You won! Rock beats Paper");
}else if (playerSelection == 'Scissor' && computerSelection == 'Rock') {
    console.log("You lost! Rock beats Scissor");
} else if (playerSelection == 'Scissor' && computerSelection == 'Paper'){
    console.log("You won! Scissor beats Paper");
} else {
    console.log("Invalid Chice please type one of the chice as displayed e.g Paper");
}
}

//Five rounds play function
function game(){
    for (let i=0; i<5; i++){
        playRound();
    }
}

game();