function getComputerChoice() {

  let rando = Math.floor(Math.random() * 3);

  switch (rando) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  }

}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    return "tie";
  }

  if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'You lose! Paper beats rock'
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock beats scissors'
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win! Paper beats rock'
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 'You lose! Scissors beat paper '
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You win! Scissors beat paper'
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return 'You lose! Rock beats scissors'
  }
}

function playerSelection() {

  let lolBool = true;
  let choice;

  while (lolBool) {
    choice = prompt("rock, paper or scissors?");

    if (choice == null) { alert('incorrect value!'); continue ;}

    if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
      lolBool = false;
    } else {
      alert("incorrect value!");
    }

  }

  return choice.toLowerCase();
}

function game() {
  let points = 0;
  let loses = 0;

  //removed for loop here
    let result = playRound(playerSelection(), getComputerChoice())
    console.log(result)

    if (result != undefined) {
      if (result.includes('win')) {
        points += 1;
      } else if (result.includes('lose')) {
        loses += 1;
      }
    

  }

  console.log(`Result: ${points} vs ${loses}`)
}



function playOnClick(button){
  
  
  
  console.log(this.id);
  console.log(playRound(tempo, getComputerChoice()));



}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => console.log(playRound('rock', getComputerChoice())));
paperBtn.addEventListener('click', () => console.log(playRound('paper', getComputerChoice())));
scissorsBtn.addEventListener('click', () => console.log(playRound('scissors', getComputerChoice())));