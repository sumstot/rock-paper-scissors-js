// function for computer choice
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choice.length);
  return choice[randomNumber];
}
// variables for score
let player_score = 0;
let comp_score = 0;
const ROUNDS = 5;
const score = document.querySelector("#score");
const h1PlayerScore = document.createElement("h3");
const h1CompScore = document.createElement("h3");
const result = document.querySelector("#result");
const printResult = document.createElement("h3");

const getScore = function (player_score, comp_score) {
  h1PlayerScore.textContent = `Player's current score: ${player_score}`;
  h1PlayerScore.style.color = "white";
  h1PlayerScore.style.textAlign = "center";
  score.appendChild(h1PlayerScore);
  h1CompScore.textContent = `Computer's current score: ${comp_score}`;
  h1CompScore.style.textAlign = "center";
  h1CompScore.style.color = "white";
  score.appendChild(h1CompScore);
};

const getCompScore = function () {};

// for (let i = 0; i < 5; i++){

//TODO this is for testing

function getWinner(player_selection, comp_selection) {
  if (player_selection === comp_selection) {
    getScore(player_score, comp_score);
    return `You both chose ${player_selection}. It's a tie 🤷‍♂️`;
  } else if (
    (player_selection === "rock" && comp_selection === "scissors") ||
    (player_selection === "scissors" && comp_selection === "paper") ||
    (player_selection === "paper" && comp_selection === "rock")
  ) {
    player_score += 1;
    getScore(player_score, comp_score);
    return `You chose ${player_selection}. Computer chose ${comp_selection}. YOU WIN 🎉`;
  } else {
    comp_score += 1;
    getScore(player_score, comp_score);
    return `You chose ${player_selection}. Computer chose ${comp_selection}. You lose 😔`;
  }
}

//Play game

function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const result = [];
  result.push(playerChoice);
  result.push(computerChoice);
  console.log(result);
  const winner = getWinner(playerChoice, computerChoice);
  rpsResult(winner);
}

const rpsResult = function (winner) {
  printResult.style.color = "white";
  printResult.style.textAlign = "center";
  printResult.textContent = `${winner}`;
  result.appendChild(printResult);
};

//event listeners for button clicks

const choices = document.querySelectorAll(".choices");
choices.forEach((choice) => choice.addEventListener("click", play));
