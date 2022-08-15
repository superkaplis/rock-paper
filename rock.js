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

    if (choice == null) { alert('incorrect value!'); continue; }

    if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
      lolBool = false;
    } else {
      alert("incorrect value!");
    }

  }

  return choice.toLowerCase();
}

// game function variables;
let wins = 0;
let loses = 0;

function game(round) {
  
  endResult.textContent = '';
  
  if (round.includes('win')) {
    wins += 1;
    resultText.textContent = 'You win this round!';
  } else if (round.includes('lose')) {
    loses += 1;
    resultText.textContent = 'You lose this round!';
  } else if (round.includes('tie')) {
    resultText.textContent = 'Tie';
  }

  resultPlayer.textContent = wins;
  resultComputer.textContent = loses;

  if (loses == 5) {
    endResult.textContent = 'YOU LOSE THE GAME'
    endResult.style.color = 'red';
    loses = 0;
    wins = 0;
  } else if (wins == 5) {
    endResult.textContent = 'YOU WIN THE GAME'
    endResult.style.color = '#DBF227';
    wins = 0;
    loses = 0;
  }
}


const endResult = document.querySelector('#end-result');
const resultText = document.querySelector('.result-message');
const resultPlayer = document.querySelector('.result-player');
const resultComputer = document.querySelector('.result-pc');



function playOnClick(choice) {
  let roundResult = playRound(choice, getComputerChoice())
  game(roundResult);



}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');



