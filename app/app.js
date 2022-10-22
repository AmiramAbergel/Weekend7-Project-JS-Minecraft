import { start as handleStart } from "../public/js/landPage.js";
import { drawGrid as draw } from "../public/js/grid.js";
import { northWorld } from "../public/js/worlds.js";
import * as tools from "../public/js/tools.js";
import * as tiles from "../public/js/tiles.js";
//landPage
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", handleStart);
//main
export const gameBoard = document.getElementById("game-board");
function main() {}
draw(northWorld, gameBoard);
//
export const minecraftWorld = {
    selectedTool: "", //arr
    appendTile: "",
    tools: {
        "axe-tool": ["tree-tile", "tree-leaves-tile"],
        "pickaxe-tool": ["rock-tile"],
        "shovel-tool": ["soil-tile", "grass-tile"],
    },
    inventory: {
        status: "inActive",
        "grass-tile": {
            var: tiles.grassTile,
            count: 0,
            active: false,
        },
        "rock-tile": {
            var: tiles.rockTile,
            count: 0,
            active: false,
        },
        "soil-tile": {
            var: tiles.soilTile,
            count: 0,
            active: false,
        },
        "tree-tile": {
            var: tiles.treeTile,
            count: 0,
            active: false,
        },
        "tree-leaves-tile": {
            var: tiles.treeLTile,
            count: 0,
            active: false,
        },
    },
};
//

//
const handleBoard = (event) => {
    const input = event.target;
    const boardClassList = input.classList;
    const world = minecraftWorld;
    const currentTool = world.selectedTool;
    const appendTile = world.appendTile;
    const appendTileObj = world.inventory[appendTile];
    const selectedTile = tiles.checkTiles(boardClassList); //selectedTile-name str!
    const selectedTileObj = world.inventory[selectedTile];
    console.dir(selectedTileObj);
    if (currentTool !== "") {
        for (let i = 0; i < currentTool.length; i++) {
            if (selectedTile === currentTool[i]) {
                boardClassList.remove(selectedTile);
                if (selectedTileObj.count === 0) {
                    selectedTileObj.var.classList.remove("inActiveTile");
                }
                selectedTileObj.count++;
                console.log(selectedTile, selectedTileObj.count);
            }
        }
    } else if (
        currentTool === "" &&
        world.inventory.status === "active" &&
        boardClassList.length === 0
    ) {
        if (appendTileObj.count > 0) {
            appendTileObj.count--;
            boardClassList.add(appendTile);
            if (appendTileObj.count === 0) {
                world.inventory.status = "inActive";
                appendTileObj.var.classList.add("inActiveTile");
            }
        }
    }
};
gameBoard.addEventListener("mousedown", handleBoard);
