import { start as handleStart } from "../public/js/landPage.js";
import { drawGrid as draw } from "../public/js/grid.js";
import { northWorld } from "../public/js/worlds.js";
import * as tools from "../public/js/tools.js";
import * as tiles from "../public/js/tiles.js";
//landPage
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", handleStart);
//main
const gameBoard = document.getElementById("game-board");
function main() {}
draw(northWorld, gameBoard);
//
export const minecraftWorld = {
    selectedTool: "", //arr
    tools: {
        "axe-tool": ["tree-tile", "tree-leaves-tile"],
        "pickaxe-tool": ["rock-tile"],
        "shovel-tool": ["soil-tile", "grass-tile"],
    },
    currentTile: "",
    inventory: [],
};
//
export const checkTiles = (classList) => {
    const input = classList;
    let res = "";
    if (input.contains("grass-tile")) {
        return (res = "grass-tile");
        // applyingTiles("grass-tile");
    } else if (input.contains("rock-tile")) {
        return (res = "rock-tile");
        //applyingTiles("rock-tile");
    } else if (input.contains("soil-tile")) {
        return (res = "soil-tile");
        // applyingTiles("soil-tile");
    } else if (input.contains("tree-tile")) {
        return (res = "tree-tile");
        // applyingTiles("tree-tile");
    } else if (input.contains("tree-leaves-tile")) {
        return (res = "tree-leaves-tile");

        //applyingTiles("tree-leaves-tile");
    }
};

//
const handleBoard = (event) => {
    const input = event.target;
    const boardClassList = input.classList;
    const world = minecraftWorld;
    const currentTool = world.selectedTool;
    const targetTile = checkTiles(boardClassList);
    for (let i = 0; i < currentTool.length; i++) {
        console.log(currentTool[0]);
        if (targetTile === currentTool[i]) {
            boardClassList.remove(targetTile);
        }
    }
};
gameBoard.addEventListener("click", handleBoard);
