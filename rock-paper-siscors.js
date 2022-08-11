function getComputerChoice () {
  var choice = ["Rock", "Paper", "Sissors"]
  var randomNumber = Math.floor(Math.random()*choice.length)
  return choice[randomNumber]
}
var comp_selection = getComputerChoice()
console.log(comp_selection)

player_selection = prompt("Please choose: Rock, Paper, or Sissors").toLowerCase();

function rps_game(player_selection, comp_selection) {
if (player_selection === comp_selection) {
  console.log(`It's a tie. You chose ${player_selection}, computer chose ${comp_selection}.`)
}
else if (player_selection === "rock" && comp_selection === "sissors" || player_selection === "sissors" && comp_selection === "paper" || player_selection === "paper" && comp_selection === "rock"){
  console.log(`You win! You chose ${player_selection}, computer chose ${comp_selection}.`)
}

else{
  console.log(`You lose. You chose ${player_selection}, computer chose ${comp_selection}.`)
}
}

rps_game(player_selection, comp_selection)
// for (let i = 0; i < 5; i++){
//   rps_game
// }