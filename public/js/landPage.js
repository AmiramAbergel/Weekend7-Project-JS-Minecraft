/**
 * landPage js
 */

const landPageContainer = document.querySelector(".landPage");
const gameContainer = document.querySelector(".gameContainer");

/**
 * @description Game start function
 */

export const start = () => {
    landPageContainer.classList.toggle("hidden");
    gameContainer.classList.toggle("hidden");
};
