import { minecraftWorld, gameBoard } from "../../app/app.js";
export const grassTile = document.querySelector(
    ".side-bar .inventoryContainer .grass-tile"
);
export const rockTile = document.querySelector(
    ".side-bar .inventoryContainer .rock-tile"
);
export const soilTile = document.querySelector(
    ".side-bar .inventoryContainer .soil-tile"
);
export const treeTile = document.querySelector(
    ".side-bar .inventoryContainer .tree-tile"
);
export const treeLTile = document.querySelector(
    ".side-bar .inventoryContainer .tree-leaves-tile"
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
export const applyingTiles = (event) => {
    console.dir(event);
    const input = event.target;
    const board = gameBoard;
    const boardClassList = input.classList;
    const world = minecraftWorld;
    world.selectedTool = "";
    world.inventory.status = "active";
    const selectedTile = checkTiles(boardClassList);
    world.appendTile = selectedTile;
    const selectedTileInventory = world.inventory[selectedTile];
    console.log(selectedTileInventory);
    selectedTileInventory.active = true;
};

/**
 * @description
 * @param {}
 */
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

grassTile.addEventListener("click", applyingTiles);
rockTile.addEventListener("click", applyingTiles);
soilTile.addEventListener("click", applyingTiles);
treeTile.addEventListener("click", applyingTiles);
treeLTile.addEventListener("click", applyingTiles);
