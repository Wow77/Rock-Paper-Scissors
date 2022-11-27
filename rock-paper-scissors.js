
console.log("Welcome to Rock, Paper and Scissor game.\nSelect your option: \n1.Rock  2.Paper  3.Scissor");
/*
//Computer selects its option
const choiceNumber = Math.floor(Math.random()*3);
const computerOptions = ['Rock','Paper','Scissor'];
const computerChoice = computerOptions[choiceNumber];
*/
//Computer playing function
function getComputerChoice(){
    const choiceNumber = Math.floor(Math.random()*3);
    const computerOptions = ['Rock','Paper','Scissor'];
    const computerChoice = computerOptions[choiceNumber];
    return computerChoice; 
}

const computerSelection = getComputerChoice();

function game(){
    for (let i=0; i<5; i++){
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
        
        playRound();
    }
}

game();

/*
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
*/