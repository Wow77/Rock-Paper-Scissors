/*
console.log("Welcome to Rock, Paper and Scissor game.\nSelect your option: \n1.Rock  2.Paper  3.Scissor");

//Computer playing function

function getComputerChoice(){
    const choiceNumber = Math.floor(Math.random()*3);
    const computerOptions = ['Rock','Paper','Scissor'];
    const computerChoice = computerOptions[choiceNumber];
    return computerChoice; 
}


//Computer playing fucntion 2 test
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


//One round play funciton test
function playRound(playerSelection,computerSelection){
    //The player selects his/her option
let playerChoice = prompt("Enter your option:");
//Deciding the winner
if (playerChoice === computerChoice) {
    console.log("Its a Draw!");
} else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
    console.log("You lost! Paper beats Rock");
} else if (playerChoice == 'Rock' && computerChoice == 'Scissor'){
    console.log("You won! Rock beats Scissor");
}else if (playerChoice == 'Paper' && computerChoice == 'Scissor') {
    console.log("You lost! Scissor beats Paper");
} else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
    console.log("You won! Paper beats Rock");
}else if (playerChoice == 'Scissor' && computerChoice == 'Rock') {
    console.log("You lost! Rock beats Scissor");
} else if (playerChoice == 'Scissor' && computerChoice == 'Paper'){
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

//Stack overflow Code
function computerPlay() {
    let random = Math.random();
    if (random <= 0.3333) {
      return "paper";
    } else if (random >= 0.6666) {
      return "rock";
    } else {
      return "scissors";
    }
  }
  
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return lose;
      } else if (computerSelection === "rock") {
        return tie;
      } else {
        userScore++;
        return win;
      }
    }
  
    if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection === "paper") {
        userScore++;
        return win;
      } else if (computerSelection === "rock") {
        computerScore++;
        return lose;
      } else {
        return tie;
      }
    }
  
    if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection === "paper") {
        return tie;
      } else if (computerSelection === "rock") {
        userScore++;
        return win;
      } else {
        computerScore++;
        return lose;
      }
    }
  }
  
  
  let userScore = parseInt(0);
  let computerScore = parseInt(0);
  let win = "You win"
  let lose = "You lose"
  let tie = "It is a tie"
  
  for(var i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }
  */

  //Computer random selection
  function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice  == 1){
      return "rock";
    } else if (computerChoice == 2){
      return "paper";
    } else{
      return "scissor";
    }
  }

  const computerSelection = getComputerChoice();

  let playerSelection = prompt("Enter your choice:");
  
  if (playerSelection === "rock"){
    if (computerSelection === "scissor"){
      console.log("You win!");
    } else if (computerSelection === "paper"){
      console.log("You lost!");
    } else{
      console.log("It's a draw!");
    }
  } else if (playerSelection === "paper"){
    if (computerSelection === "rock"){
      console.log("You win!");
    } else if (computerSelection === "scissor"){
      console.log("You lost!");
    } else{
      console.log("It's a draw!");
    }
  } else {
    if (computerSelection === "paper"){
      console.log("You win!");
    } else if (computerSelection === "rock"){
      console.log("You lost!");
    } else{
      console.log("It's a draw!");
    }
  }