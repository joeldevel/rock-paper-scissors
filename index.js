// console.log('works!');
// result = window.prompt(message, default);
const NUMBER_OF_ROUNDS = 5;

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  return options[ Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  console.log(`P:${playerSelection}, C: ${computerSelection}`);
  playerSelection = playerSelection.toLowerCase();

  if(playerSelection === 'rock') {
    if(computerSelection === 'paper') {
      console.log(`You loose, ${computerSelection} beats ${playerSelection}`);
      return 0;
    }
    else if(computerSelection === 'rock') {
      console.log(`Tie round, ${computerSelection} equals ${playerSelection}`);
      return;
    }
    else {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      return 1;
    }
  } else if(playerSelection === 'paper') {
    if(computerSelection === 'scissors') {
      console.log(`You loose, ${computerSelection} beats ${playerSelection}`);
      return 0;
    }
    else if(computerSelection === 'paper') {
      console.log(`Tie round, ${computerSelection} equals ${playerSelection}`);
      return;
    }
    else {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      return 1;
    }
  } else if(playerSelection === 'scissors') {
    if(computerSelection === 'rock') {
      console.log(`You loose, ${computerSelection} beats ${playerSelection}`);
      return 0;
    }
    else if(computerSelection === 'scissors') {
      console.log(`Tie round, ${computerSelection} equals ${playerSelection}`);
      return;
    }
    else {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      return 1;
    }
  } else {
    return 'Wrong input!';
  }
}

// const playerSelection = window.prompt("input: rock, paper or scissors ");
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let validRounds = NUMBER_OF_ROUNDS;

  while(validRounds > 0) {
    let point = playRound(
      window.prompt("input: rock, paper or scissors ") ,computerPlay());
    if(point == 1) playerPoints++;
    if(point == 0) computerPoints++;
    validRounds--;
  }
  console.log('END OF GAME');
  if(playerPoints == computerPoints ) return console.log('Tie game');
  if(playerPoints > computerPoints) {
    return console.log('You win');
  } else {
    return console.log('You loose');
  }
}
game();
