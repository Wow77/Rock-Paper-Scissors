//Computer random selection
  function getComputerChoice(){
    let computerOption = Math.floor(Math.random()*3);
    if (computerOption  == 1){
      return "rock";
    } else if (computerOption == 2){
      return "paper";
    } else{
      return "scissor";
    }
  }

  //Single round play function
  function playRound(playerSelection, computerSelection){
  if (playerSelection.toLowerCase() === "rock"){
    if (computerSelection === "scissor"){
      return "You Win! Rock beats Scissor";
    } else if (computerSelection === "paper"){
      return "You Lose! Paper beats Rock";
    } else{
      return "It's a draw!";
    }
  } else if (playerSelection.toLowerCase() === "paper"){
    if (computerSelection === "rock"){
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "scissor"){
      return "You Lose! Scissor beats Paper";
    } else{
      return "It's a draw!";
    }
  } else if (playerSelection.toLowerCase() === "scissor"){
    if (computerSelection === "paper"){
      return "You Win! Scissor beats Paper";
    } else if (computerSelection === "rock"){
      return "You Lose! Rock beats Scissor";
    } else{
      return "It's a draw!";
    }
  } else{
    return "Invalid choice please enter correct option";
  }
  }

  //Five times game play function
  function game(){
    for(let i=0; i<5; i++){
      const computerSelection = getComputerChoice();
      const playerSelection = prompt("Welcome to Man vs computer game.\nSelect your choice:\n 1.Rock       2.Paper     3.Scissor\nEnter your choice e.g Paper:");
      console.log(playRound(playerSelection, computerSelection));
    }
  }

  game();