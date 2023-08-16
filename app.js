const start1Player = document.getElementById("start-1-player");
const home = document.getElementById("home");
const singlePlayer = document.getElementById("single-player");
const homeButton = document.getElementById("back");

start1Player.addEventListener("click", () => {
    home.style.display = "none";
    singlePlayer.style.display = "block";
});

const dice = document.getElementById("dice");
const roll = document.getElementById("roll");
const scoreCount = document.getElementById("score");
const winMessage = document.getElementById("win");
const lossMessage = document.getElementById("loss");
const lossButton = document.getElementById("again-loss");
const winButton = document.getElementById("again-win");

let prevRoll = 0;
let score = 0;

homeButton.addEventListener("click", () => {
    score = 0;
    scoreCount.textContent = `Score: ${score}`;
    singlePlayer.style.display = "none";
    home.style.display = "block";
});

const rollDice = () => {
    let rollNumber = Math.floor(Math.random() * 6 + 1);
    console.log(`currentRole: ${rollNumber} and previous roll: ${prevRoll}`);

    for (let i = 1; i <= 6; i++) {
        dice.classList.remove("show-" + i);
        if (rollNumber === i) {
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

roll.onclick = () => {
    rollScore = rollDice();
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
