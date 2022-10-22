import { start as handleStart } from "../public/js/landPage.js";
import { drawGrid as draw } from "../public/js/grid.js";
import { northWorld } from "../public/js/worlds.js";
//landPage
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", handleStart);
//main
const gameBoard = document.getElementById("game-board");
function main() {}
draw(northWorld, gameBoard);
