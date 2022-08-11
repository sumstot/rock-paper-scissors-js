function getComputerChoice () {
  var choice = ["Rock", "Paper", "Sissors"]
  var randomNumber = Math.floor(Math.random()*choice.length)
  return choice[randomNumber]
}
var comp_answer = getComputerChoice()
console.log(comp_answer)