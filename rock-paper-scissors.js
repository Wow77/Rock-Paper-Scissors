//Welcome message
console.log("Welcome to Rock, Paper and Scissor game.\nSelect your option: \n1.Rock  2.Paper  3.Scissor");
//Computer selects its option
const choiceNumber = Math.floor(Math.random()*3);
const computerOptions = ['Rock','Paper','Scissor'];
const ComputerChoice = computerOptions[choiceNumber];
//The player selects his/her option
let playerSelection = prompt("Enter your option:");