console.log('works!');


function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[ Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  return 'playing!';
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
