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
    if (computerChoice === "scissor"){
      return "You Win! Rock beats Scissor";
    } else if (computerChoice === "paper"){
      return "You Lose! Paper beats Rock";
    } else{
      return "It's a draw!";
    }
  } else if (playerSelection.toLowerCase() === "paper"){
    if (computerChoice === "rock"){
      return "You Win! Paper beats Rock";
    } else if (computerChoice === "scissor"){
      return "You Lose! Scissor beats Paper";
    } else{
      return "It's a draw!";
    }
  } else if (playerSelection.toLowerCase() === "scissor"){
    if (computerChoice === "paper"){
      return "You Win! Scissor beats Paper";
    } else if (computerChoice === "rock"){
      return "You Lose! Rock beats Scissor";
    } else{
      return "It's a draw!";
    }
  } else{
    return "Invalid choice please enter correct option";
  }
  }

  const computerChoice = getComputerChoice();
 

  //Five times game play function
  function game(){
    for(let i=0; i<5; i++){
      const playerSelection = prompt("Enter your choice:");
      console.log(playRound(playerSelection, computerChoice));
    }
  }

  game();