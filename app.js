// Grab elements from the home page
const start1Player = document.getElementById("start-1-player");
const home = document.getElementById("home");
const singlePlayer = document.getElementById("single-player");

// Add an instuction to the button to initialise the game
start1Player.addEventListener("click", () => {
    home.style.display = "none";
    singlePlayer.style.display = "block";
});

// INSTRUCTIONS FOR THE SINGLE PLAYER GAME
// Grab the elements from the single player game page
const homeButton = document.getElementById("back");
const dice = document.getElementById("dice");
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
const rollDice = () => {
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
    rollScore = rollDice();
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
        if (score >= 10) {
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
