//Welcome to Two Player Jeopardy!
//To start the game, one of the players must click on the Start Game button.
let questionOne = 'patronus'
let questionTwo = 'Primrose Everdeen'
let questionThree = 'Singapore'
let questionFour = 'lion'
let questionFive = 'hogwarts'
let questionSix = 'Panem'
let questionSeven = 'Colin Koo'
let questionEight = 'the white witch'
let questionNine = 'hogwarts houses'
let questionTen = 'Madge'
let questionEleven = 'Tyersall Park'
let questionTwelve = 'Peter'

function startGame() {
    window.prompt('Welcome to Two Player Jeopardy! Flip a coin! The winner will pick the first theme and difffiulty of the questions. Type heads or tails to do so.');
if (clickStart === 'heads') {
    alert("Player One picks the first theme!");
} else {
     alert("Player Two picks the first theme!");
}
}
//Once the player who is the winner of the coin toss wins, that player picks the theme and uses the timer for every round.
function startTimer() {
     alert('The round has started! You have 20 seconds')
}
//Players can use this to end the round earlier.
function endRound() {
    alert('Time is Up!')
}
//Players can use this function to end the round earlier.
function endGame() {
    alert('You ended the game!')
}
//Players can use this function to end the game when the button is clicked.
function restartGame() {
    alert('The game is restarting!')
}
//Each book has its own round. In this game, we have four books with three questions. 
//The players can click on one button per question in the book in a round.
//The first four questions of every theme are worth 100 points each.
function harryPotter_Question1() {
    window.prompt('A form of advanced magic a witch or wizard that is casting the spell uses to draw upon their happiest memories')
    if (questionOne === 'patronus') {
        alert("Congrats! You earned 100 points.")
    } else {
        alert("Sorry, you missed the question.")
    }
    }

function hungerGames_Question1() {
    window.prompt('Katniss Everdeen volunteers as tribute to compete in the hunger games for this person.')
    
    if (questionTwo === 'Primrose Everdeen') {
       alert("Congratulations! You earned 100 points.")
} else {
    alert("Sorry, you missed the question.")
}
}

function crazyRichAsians_Question1() {
    window.prompt('Nick Youngs family lives in ________.')
    
    if (questionThree === 'Singapore') {
      alert("Congratulations! You earned 100 points.")
} else {
    alert("Sorry, you missed the question.")
}
}

function narnia_Question1() {
    window.prompt('What animal is Aslan?')

    if (questionFour === 'lion') {
       alert("Congratulations! You earned 100 points.")
} else {
      alert("Sorry, you missed the question.")
}
}
//The next four questions in every theme are worth 300 points each.
function harryPotter_Question2() {
    window.prompt('Where Harry Potter, Hermione Granger, and Ron Weasley go to school')
       if (questionFive === 'hogwarts') {
         alert("Congratulations! You earned 300 points.")
       } else {
        alert("Sorry, you missed the question.")
       }
}

function hungerGames_Question2() {
    window.prompt('This was the offical name of all 12 districts')
    if (questionSix === 'Panem') {
        alert("Congratualations! You earned 300 points.")
    } else {
        alert("Sorry, you missed the question.")
    }
}

function crazyRichAsians_Question2() {
    window.prompt('Which one of Nick Youngs best friends is getting married?')
    if (questionSeven === 'Colin Koo') {
        alert("Congratualations! You earned 300 points.")
    } else {
        alert("Sorry, you missed the question.")
    }
}

function narnia_Question2() {
    window.prompt('Who picked up Edmund in a carriage and gave him Turkish delight?')
    if (questionEight === 'the white witch') {
        alert("Congratualations! You earned 300 points.")
    } else {
        alert("Sorry, you missed the question.")
    }
}
//The final four questions in every theme are worth 500 points each.
function harryPotter_Question3() {
    window.prompt('Gryffindor, Ravenclaw, Slytherin, Hufflepuff')
    if (questionNine === 'hogwarts houses') {
        alert("Congratualations! You earned 500 points.")
    }else{ 
        alert("Sorry, you missed the question.")
    }
}

function hungerGames_Question3() {
    window.prompt('This person gave Katniss the mockingjay pin.')
    if (questionTen === 'Madge') {
         alert("Congratualations! You earned 500 points.")
    } else {
        alert("Sorry, you missed the question.")
    }
}

function crazyRichAsians_Question3() {
    window.prompt('This is the estate where Nick Youngs grandmother lives.')
    if (questionEleven === 'Tyersall Park') {
        alert("Congratualations! You earned 500 points.")
    } else {
        alert("Sorry, you missed the question.")
    }
}

function narnia_Question3() {
    window.prompt('The oldest sibling in the Pevensie family')
    if (questionTwelve === 'Peter') {
       alert("Congratualations! You earned 500 points.")
} else {
    alert("Sorry, you missed the question.")
}
}
//This is how player one and player two will be calculated.
function roundOnePlayerScores() 
for (let i = 0; i < 1000; i+=100)
function roundTwoPlayerScores()
for (let i = 0; i < 2000; i+=100)
roundThreePlayerScores()
for (let i = 0; i < 3000; i+=100)
roundFourPlayerScores()
for (let i = 0; i < 4000; i+=100)

//When the round is over, Player One or Player Two will see their scores on the screen.
function endRound()
alert("Time's Up!")
alert("Player One Score:")
alert("Player Two Score:")


//The player who has the highest score after all four rounds are completed will win the game.
function winGame() 
    alert("Congratulations! The player with the highest score has won the game!");
function loseGame() 
    alert("Sorry, you didn't win this time!");
