function getComputerChoice() {

  //generates random number
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

  let lolValue = true;
  let choice;

  while (lolValue) {
    choice = prompt("rock, paper or scissors?");

    if(choice == null) {
    }

    if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
      lolValue = false;
    } else {
      alert("incorrect value!");
    }

  }

  return choice.toLowerCase();
}

function game() {
  let points = 0;
  let loses = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection(), getComputerChoice())
    console.log(result)

    if (result != undefined) {
      if (result.includes('win')) {
        points += 1;
      } else if (result.includes('lose')) {
        loses += 1;
      }
    }

  }

  console.log(`Result: ${points} vs ${loses}`)
}

game();
