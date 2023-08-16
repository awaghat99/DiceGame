// Grab elements from the home page
const start1Player = document.getElementById("start-1-player");
const start2Player = document.getElementById("start-2-player");
const home = document.getElementById("home");
const singlePlayer = document.getElementById("single-player");
const doublePlayer = document.getElementById("double-player");

// Add an instuction to the button to initialise the game
start1Player.addEventListener("click", () => {
    home.style.display = "none";
    singlePlayer.style.display = "block";
});

start2Player.addEventListener("click", () => {
    home.style.display = "none";
    doublePlayer.style.display = "block";
});

// INSTRUCTIONS FOR THE SINGLE PLAYER GAME
// Grab the elements from the single player game page
const homeButton = document.getElementById("back");
const dice1 = document.getElementById("dice");
const roll = document.getElementById("roll");
const scoreCount = document.getElementById("score");
const winMessage = document.getElementById("win");
const lossMessage = document.getElementById("loss");
const lossButton = document.getElementById("again-loss");
const winButton = document.getElementById("again-win");
// Initialise score and prev variables
let prevRoll = 0;
let score = 0;
// Send user back home with back button
homeButton.addEventListener("click", () => {
    score = 0;
    scoreCount.textContent = `Score: ${score}`;
    singlePlayer.style.display = "none";
    home.style.display = "block";
});
// Create a roll dice function that will create a roll animation
const rollDice = (dice) => {
    // `roll the dice` by generting random number between 1 and 6
    let rollNumber = Math.floor(Math.random() * 6 + 1);
    // Depending on the number add a class so that the relavent face of the die shows
    for (let i = 1; i <= 6; i++) {
        dice.classList.remove("show-" + i);
        if (rollNumber === i) {
            // If the number is the same as before change the face so that an animation still appears
            if (rollNumber === prevRoll) {
                dice.classList.add("show-" + (prevRoll - 1));
                setTimeout(() => {
                    dice.classList.remove("show-" + (prevRoll - 1));
                    dice.classList.add("show-" + i);
                }, 300);
            } else {
                dice.classList.add("show-" + i);
            }
        }
    }
    prevRoll = rollNumber;
    return rollNumber;
};
// Set up the roll button
roll.onclick = () => {
    let rollScore = rollDice(dice1);
    // On each roll check for a win and loss and return to relavent screen and then update score
    if (rollScore === 1) {
        setTimeout(() => {
            singlePlayer.style.display = "none";
            lossMessage.style.display = "block";
            score = 0;
            scoreCount.textContent = `Score: 0`;
        }, 1400);
    } else {
        score += rollScore;
        scoreCount.textContent = `Score: ${score}`;
        if (score >= 20) {
            setTimeout(() => {
                singlePlayer.style.display = "none";
                winMessage.style.display = "block";
                score = 0;
                scoreCount.textContent = `Score: 0`;
            }, 1400);
        }
    }
};

lossButton.addEventListener("click", () => {
    lossMessage.style.display = "none";
    home.style.display = "block";
});

winButton.addEventListener("click", () => {
    winMessage.style.display = "none";
    home.style.display = "block";
});

// INSTRUCTIONS FOR THE 2 PLAYER GAME
// grab elements from the 2 player game

const backTwo = document.getElementById("back-two");
const rollTwo = document.getElementById("roll-two");
const dice2 = document.getElementById("dice-two");
const oneScore = document.getElementById("player-1-score");
const twoScore = document.getElementById("player-2-score");
const oneHold = document.getElementById("player-1-hold");
const twoHold = document.getElementById("player-2-hold");

let turnIs = "1";
let player1Score = 0;
let player2Score = 0;

backTwo.addEventListener("click", () => {
    doublePlayer.style.display = "none";
    turnIs = "1";
    player1Score = 0;
    player2Score = 0;
    oneScore.textContent = "Player 1 Score : 0";
    twoScore.textContent = "Player 2 Score : 0";
    twoScore.style.backgroundColor = "white";
    oneScore.style.backgroundColor = "red";
    home.style.display = "block";
});

rollTwo.onclick = () => {
    let rollScoreTwo = rollDice(dice2);
    if (turnIs === "1") {
        if (rollScoreTwo === 1) {
            setTimeout(() => {
                player1Score = 0;
                turnIs = "2";
                oneScore.textContent = "Player 1 Score : 0";
                oneScore.style.backgroundColor = "white";
                twoScore.style.backgroundColor = "red";
            }, 1400);
        } else {
            player1Score += rollScoreTwo;
            oneScore.textContent = `Player 1 Score : ${player1Score}`;
            if (player1Score >= 20) {
                setTimeout(() => {
                    doublePlayer.style.display = "none";
                    winMessage.style.display = "block";
                    player1Score = 0;
                    player2Score = 0;
                    oneScore.textContent = `Player 1 Score: 0`;
                }, 1400);
            }
        }
    } else if (turnIs === "2") {
        if (rollScoreTwo === 1) {
            setTimeout(() => {
                player2Score = 0;
                turnIs = "1";
                twoScore.textContent = "Player 2 Score : 0";
                twoScore.style.backgroundColor = "white";
                oneScore.style.backgroundColor = "red";
            }, 1400);
        } else {
            player2Score += rollScoreTwo;
            twoScore.textContent = `Player 2 Score : ${player2Score}`;
            if (player2Score >= 20) {
                setTimeout(() => {
                    doublePlayer.style.display = "none";
                    winMessage.style.display = "block";
                    player1Score = 0;
                    player2Score = 0;
                    turnIs = "1";
                    twoScore.textContent = `Player 2 Score: 0`;
                    oneScore.textContent = `Player 1 Score: 0`;
                    twoScore.style.backgroundColor = "white";
                    oneScore.style.backgroundColor = "red";
                }, 1400);
            }
        }
    }
};

oneHold.addEventListener("click", () => {
    if (turnIs === "1") {
        oneScore.style.backgroundColor = "white";
        twoScore.style.backgroundColor = "red";
        turnIs = "2";
    }
});

twoHold.addEventListener("click", () => {
    if (turnIs === "2") {
        twoScore.style.backgroundColor = "white";
        oneScore.style.backgroundColor = "red";
        turnIs = "1";
    }
});
