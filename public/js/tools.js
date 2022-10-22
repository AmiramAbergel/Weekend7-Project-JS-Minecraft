import { minecraftWorld } from "../../app/app.js";

export const axeTool = document.querySelector(
    ".side-bar .toolsContainer .axe-tool"
);
export const pickaxeTool = document.querySelector(
    ".side-bar .toolsContainer .pickaxe-tool"
);
export const shovelTool = document.querySelector(
    ".side-bar .toolsContainer .shovel-tool"
);

/**
 * @description
 * @param {Object} Obj
 */
export const checkTools = (event) => {
    const input = event.target;
    console.dir(input);
    if (input.classList.contains("axe-tool")) {
        applyingTools("axe-tool");
    } else if (input.classList.contains("pickaxe-tool")) {
        applyingTools("pickaxe-tool");
    } else {
        applyingTools("shovel-tool");
    }
};

/**
 * @description
 * @param {}
 */
export const applyingTools = (str) => {
    const toolsObj = minecraftWorld.tools;
    switch (str) {
        case "axe-tool":
            minecraftWorld.selectedTool = toolsObj["axe-tool"];
            break;
        case "pickaxe-tool":
            minecraftWorld.selectedTool = toolsObj["pickaxe-tool"];
            break;
        case "shovel-tool":
            minecraftWorld.selectedTool = toolsObj["shovel-tool"];
            break;
        default:
            minecraftWorld.selectedTool = "";
    }
};

axeTool.addEventListener("click", checkTools);
pickaxeTool.addEventListener("click", checkTools);
shovelTool.addEventListener("click", checkTools);
