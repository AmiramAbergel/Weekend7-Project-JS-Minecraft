const landPageContainer = document.querySelector(".landPage");
const gameContainer = document.querySelector(".gameContainer");
const startBtn = document.querySelector("#start");

const handleStart = () => {
    landPageContainer.classList.toggle("hidden");
    gameContainer.classList.toggle("hidden");
};

startBtn.addEventListener("click", handleStart);
