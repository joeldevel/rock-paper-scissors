console.log('works!');


function computerPlay() {
  return 'Rock';
}

function playRound(playerSelection, computerSelection) {
  return 'playing!';
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
