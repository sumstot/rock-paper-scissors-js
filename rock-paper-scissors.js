// function for computer choice
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choice.length);
  return choice[randomNumber];
}
// variables for score
let player_score = 0;
let comp_score = 0;

// const playerChoice = "rock";
// for (let i = 0; i < 5; i++){
let comp_selection = getComputerChoice();

//TODO this is for testing
// player_selection = prompt(
//   "Please choose: Rock, Paper, or Scissors"
// ).toLowerCase();

function rps_game(player_selection, comp_selection) {
  if (player_selection === comp_selection) {
    return `It's a tie. You chose ${player_selection}, computer chose ${comp_selection}.`;
  } else if (
    (player_selection === "rock" && comp_selection === "scissors") ||
    (player_selection === "scissors" && comp_selection === "paper") ||
    (player_selection === "paper" && comp_selection === "rock")
  ) {
    player_score += 1;
    return `You win! You chose ${player_selection}, computer chose ${comp_selection}.`;
  } else {
    comp_score += 1;
    return `You lose. You chose ${player_selection}, computer chose ${comp_selection}.`;
  }
}
let rpsResult = rps_game(player_selection, comp_selection);

if (player_score > comp_score) {
  console.log(
    `Final Score Player: ${player_score} Computer: ${comp_score}. You win!`
  );
} else if (player_score === comp_score) {
  console.log(
    `Final Score Player: ${player_score} Computer: ${comp_score}. It's a tie`
  );
} else {
  console.log(
    `Final Score Player: ${player_score} Computer: ${comp_score}. You lose.`
  );
}
//TODO remove and reappend element after a round
// deals with the scoring of the game in DOM
const score = document.querySelector("#score");

const h1PlayerScore = document.createElement("h3");
h1PlayerScore.textContent = `Player's current score: ${player_score}`;
h1PlayerScore.style.color = "white";
h1PlayerScore.style.textAlign = "center";

const h1CompScore = document.createElement("h3");
h1CompScore.textContent = `Computer's current score: ${comp_score}`;
h1CompScore.style.textAlign = "center";
h1CompScore.style.color = "white";

score.appendChild(h1PlayerScore);
score.appendChild(h1CompScore);

//TODO remove and reappend element after a round
// deals with posting the results of the game in DOM
const result = document.querySelector("#result");

const gameResult = document.createElement("h3");
gameResult.style.color = "white";
gameResult.style.textAlign = "center";
gameResult.textContent = `${rpsResult}`;
result.appendChild(gameResult);

//event listeners for button clicks
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function () {
  rps_game("rock", getComputerChoice);
});
paper.addEventListener("click", function () {
  rps_game("paper", getComputerChoice);
});
scissors.addEventListener("click", function () {
  rps_game("scissors", getComputerChoice);
});
