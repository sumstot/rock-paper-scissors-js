function getComputerChoice () {
  var choice = ["rock", "paper", "scissors"]
  var randomNumber = Math.floor(Math.random()*choice.length)
  return choice[randomNumber]
}
var player_score = 0
var comp_score = 0

for (let i = 0; i < 5; i++){

var comp_selection = getComputerChoice()

player_selection = prompt("Please choose: Rock, Paper, or Scissors").toLowerCase();

function rps_game(player_selection, comp_selection) {
if (player_selection === comp_selection) {
  console.log(`It's a tie. You chose ${player_selection}, computer chose ${comp_selection}.`)
  console.log(`Player Score: ${player_score}  Computer Score ${comp_score}`)
}
else if (player_selection === "rock" && comp_selection === "scissors" || player_selection === "scissors" && comp_selection === "paper" || player_selection === "paper" && comp_selection === "rock"){
  player_score += 1
  console.log(`You win! You chose ${player_selection}, computer chose ${comp_selection}.`)
  console.log(`Player Score: ${player_score}  Computer Score ${comp_score}`)
}

else{
  comp_score += 1
  console.log(`You lose. You chose ${player_selection}, computer chose ${comp_selection}.`)
  console.log(`Player Score: ${player_score}  Computer Score ${comp_score}`)
}
}
rps_game(player_selection, comp_selection)
}

if (player_score > comp_score){
  console.log(`Final Score Player: ${player_score} Computer: ${comp_score}. You win!`)
}

else if (player_score === comp_score){
  console.log(`Final Score Player: ${player_score} Computer: ${comp_score}. It's a tie`)
}

else{
  console.log(`Final Score Player: ${player_score} Computer: ${comp_score}. You lose.`)
}