import { minecraftWorld } from "../../app/app.js";
const grassTile = document.querySelector(
    ".side-bar .inventoryContainer .grass-tile"
);
const rockTile = document.querySelector(
    ".side-bar .inventoryContainer .rock-tile"
);
const soilTile = document.querySelector(
    ".side-bar .inventoryContainer .soil-tile"
);
const treeTile = document.querySelector(
    ".side-bar .inventoryContainer .tree-tile"
);
const treeLTile = document.querySelector(
    ".side-bar .inventoryContainer .treeL-tile"
);

/**
 * @description
 * @param {}
 */
export const storeTiles = () => {};

/**
 * @description
 * @param {}
 */
export const applyingTiles = (str) => {
    const toolsObj = minecraftWorld.tools;
};

/**
 * @description
 * @param {}
 */
export const checkTiles = (event) => {
    const input = event.target;
    let res = "";
    if (input.classList.contains("grass-tile")) {
        return (res = "grass-tile");
        // applyingTiles("grass-tile");
    } else if (input.classList.contains("rock-tile")) {
        //applyingTiles("rock-tile");
    } else if (input.classList.contains("soil-tile")) {
        // applyingTiles("soil-tile");
    } else if (input.classList.contains("tree-tile")) {
        // applyingTiles("tree-tile");
    } else if (input.classList.contains("tree-leaves-tile")) {
        //applyingTiles("tree-leaves-tile");
    }
};
