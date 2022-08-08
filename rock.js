function getComputerChoice () {
  
  //generates random number
  let rando = Math.floor(Math.random() * 3);

  switch(rando){
    case 0:
      return 'rock';
    case 1: 
      return 'scissors';
    case 2:
      return 'paper';
  }

}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
      return "tie";
    }

    if(playerSelection == 'rock' && computerSelection == 'paper'){
      console.log('You lose! Paper beats rock')
    } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
      console.log('You win! Rock beats scissors')
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
      console.log('You win! Paper beats rock')
    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
      console.log('You lose! Scissors beat paper ')
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
      console.log('You win! Scissors beat paper')
    } else if(playerSelection == 'scissors' && computerSelection == 'rock'){
      console.log('You lose! Rock beats scissors')
    }

  }




let playerSelection = prompt("rock, paper or scissors?").toLowerCase();




let computerSelection = getComputerChoice();


