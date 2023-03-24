//Welcome to Two Player Jeopardy!
function startGame() {
    alert("Welcome to Two Player Jeopardy!");

//To pick a theme, Player One and Player Two must flip a coin
window.prompt("Flip a coin! The winner will pick the first theme and difffiulty of the questions. Type 'heads' or 'tails' to do so.");
function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
if (coinFlip === "heads") {
    alert("Player One picks the theme!")
    } else {
     coinFlip === "tails"
     alert("Player Two picks the theme!")
    }
}
//The player that wins the coin toss picks the first theme.
//The game has four book themes to choose from.


//To answer the question, Player One and Player Two will click on their assigned buttons.
 harryPotter() 
let questionOne = "A form of advanced magic that a witch or wizard casting the spell draws upon their happiest memories"
let answerOne = "What is a Patronus?"
let questionTwo = "Where Harry Potter, Hermione Granger, and Ron Weasley go to school"
let answerTwo = "Where is Hogwarts?"
let questionThree = "Gryffindor, Ravenclaw, Slytherin, Hufflepuff"
let answerThree = "What are the four houses in Harry Potter?"

hungerGames()
let questionFour = "Katniss Everdeen volunteers as tribute to compete in the hunger games for this person."
let answerFour = "Primrose Everdeen"
let questionFive = "This was the offical name of all 12 districts"
let answerFive = "What is Panem?"
let questionSix = "This person gave Katniss the mockingjay pin."
let answerSix = "Madge"

crazyRichAsians()
let questionSeven = "Nick Young's family lives in ________."
let answerSeven = "Where is Singapore?"
let questionEight = "Which one of Nick Young's best friends is getting married?"
let answerEight = "Who is Colin Koo?"
let questionNine = "This is the estate where Nick Young's grandmother lives."
let answerNine = "What is Tyersall Park?"

narniaOne()
let questionTen = "What animal is Aslan?"
let answerTen = "What is a lion?"
let questionEleven = "Who picked up Edmund in a carriage and gave him Turkish delight?"
let answerEleven = "The white witch"
let questionTwelve = "The oldest sibling in the Pevensie family"
let answerTwelve = "Who was Peter?"

function answer() {
if (playerOneAnswer !== correct) {
     alert("Wrong answer! Player Two's turn");
} 

if (playerTwoAnswer !== correct) {
     alert("Wrong answer! Player One's turn")
}
    
       
    
}



/*function playerOne() {

}

function playerTwo() {

}

*/
{}

//When the round is over, Player One or Player Two will see their scores on the screen.
function endRound()
alert("Time's Up!")
alert("Player One Score:")
alert("Player Two Score:")

//The player who has the highest score after all four rounds are completed will win the game.
function winGame() 
    alert("Congratulations! Player won the game!");
function loseGame() 
    alert("Sorry, you didn't win this time!");
