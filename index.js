// const MAX_ROUNDS = 5;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const humanPointsDisplay = document.querySelector('#human-points');
const computerPointsDisplay = document.querySelector('#computer-points');

const WINNING_SCORE = 2;
let humanPoints = 0;
let computerPoints = 0;
//set up points
renderPoints(humanPointsDisplay, humanPoints);
renderPoints(computerPointsDisplay, computerPoints);
// function playRound(e) {
//   console.log(e.target.getAttribute('data-player'), computerPlay());
// }

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  return options[ Math.floor(Math.random()*3)];
}

function renderPoints(element, points) {
  element.textContent = points;
}
function endGame(winner) {
  alert(`${winner} won!`);
  humanPoints = 0;
  computerPoints = 0;
  renderPoints(humanPointsDisplay, humanPoints);
  renderPoints(computerPointsDisplay, computerPoints);
}
function playRound(e) {

  let playerSelection = e.target.getAttribute('data-player');
  computerSelection = computerPlay();
  // console.log(`P:${playerSelection}, C: ${computerSelection}`);
  playerSelection = playerSelection.toLowerCase();

  if(playerSelection === 'rock') {
    if(computerSelection === 'paper') {
      console.log(`You loose, ${computerSelection} beats ${playerSelection}`);
      computerPoints++;
    }
    else if(computerSelection === 'rock') {
      console.log(`Tie round, ${computerSelection} equals ${playerSelection}`);

    }
    else {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      humanPoints++;
    }
  } else if(playerSelection === 'paper') {
    if(computerSelection === 'scissors') {
      console.log(`You loose, ${computerSelection} beats ${playerSelection}`);
      computerPoints++;
    }
    else if(computerSelection === 'paper') {
      console.log(`Tie round, ${computerSelection} equals ${playerSelection}`);

    }
    else {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      humanPoints++;
    }
  } else if(playerSelection === 'scissors') {
    if(computerSelection === 'rock') {
      console.log(`You loose, ${computerSelection} beats ${playerSelection}`);
      computerPoints++;
    }
    else if(computerSelection === 'scissors') {
      console.log(`Tie round, ${computerSelection} equals ${playerSelection}`);

    }
    else {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      humanPoints++;
    }
  }

  renderPoints(humanPointsDisplay, humanPoints);
  renderPoints(computerPointsDisplay, computerPoints);
  if(humanPoints == WINNING_SCORE) endGame('YOU');
  if(computerPoints == WINNING_SCORE) endGame('Computer');




}

/*
function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let validRounds = MAX_ROUNDS;

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
*/
