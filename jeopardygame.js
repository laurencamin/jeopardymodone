//Welcome to Two Player Jeopardy!
function playerOne()
      alert("Player One get ready")
function playerTwo()
      alert("Player Two get ready")

function startGame() {

//To pick a theme, Player One and Player Two must flip a coin
function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
if (coinFlip === "heads") {
    playerOne();
} else {
   playerTwo();
}
}
//The player that wins the coin toss picks the first theme.
//The game has four book themes to choose from.
window.prompt("Pick a theme by typing 1, 2, 3, or 4.")

//After the player has chosen the theme, they can pick the level of difficulty of questions for the round.
//The player uses a slider to pick the difficulty for the round.
var slider = document.getElementById("difficultySlider");
var output = document.getElementById("levelOfDifficulty");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
//Set the timer for each round.
/*function setTimer() {

}
//To answer the question, Player One and Player Two will click on their assigned buttons.
function playerOne() {*/

{}

//When the round is over, Player One or Player Two will see their scores on the screen.

//The player who has the highest score after all four rounds are completed will win the game.
{
};
