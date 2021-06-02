// console.log('works!');
// result = window.prompt(message, default);

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  return options[ Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  console.log(`P:${playerSelection}, C: ${computerSelection}`);
  playerSelection = playerSelection.toLowerCase();

  if(playerSelection === 'rock') {
    if(computerSelection === 'paper')
      return `You loose, ${computerSelection} beats ${playerSelection}`;
    else if(computerSelection === 'rock')
      return `Tie round, ${computerSelection} equals ${playerSelection}`;
    else
      return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if(playerSelection === 'paper') {
    if(computerSelection === 'scissors')
      return `You loose, ${computerSelection} beats ${playerSelection}`;
    else if(computerSelection === 'paper')
      return `Tie round, ${computerSelection} equals ${playerSelection}`;
    else
      return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if(playerSelection === 'scissors') {
    if(computerSelection === 'rock')
      return `You loose, ${computerSelection} beats ${playerSelection}`;
    else if(computerSelection === 'scissors')
      return `Tie round, ${computerSelection} equals ${playerSelection}`;
    else
      return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return 'Wrong input!';
  }
}

const playerSelection = window.prompt("input: rock, paper or scissors ");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
