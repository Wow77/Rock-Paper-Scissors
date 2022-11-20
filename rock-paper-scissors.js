//Welcome message
console.log("Welcome to Rock, Paper and Scissor game.\nSelect your option: \n1.Rock  2.Paper  3.Scissor");
//Computer selects its option
const choiceNumber = Math.floor(Math.random()*3);
const computerOptions = ['Rock','Paper','Scissor'];
const computerChoice = computerOptions[choiceNumber];
//The player selects his/her option
let playerSelection = prompt("Enter your option:");
//Deciding the winner
if (playerSelection === computerChoice) {
    console.log("Its a Draw!");
} else if (playerSelection == 'Rock' && computerChoice == 'Paper') {
    console.log("Computer Won");
} else if (playerSelection == 'Rock' && computerChoice == 'Scissor'){
    console.log("You won");
}else if (playerSelection == 'Paper' && computerChoice == 'Scissor') {
    console.log("Computer Won");
} else if (playerSelection == 'Paper' && computerChoice == 'Rock'){
    console.log("You won");
}else if (playerSelection == 'Scissor' && computerChoice == 'Rock') {
    console.log("Computer Won");
} else if (playerSelection == 'Scissor' && computerChoice == 'Paper'){
    console.log("You won");
} else {
    console.log("Invalid Chice please type one of the chice as displayed e.g Paper");
}