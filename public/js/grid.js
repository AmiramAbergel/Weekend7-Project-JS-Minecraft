/**
 * @description Create new world
 * @param {number}
 */
export const drawGrid = (arr2D, board) => {
    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {
            const gameElement = document.createElement("div");
            switch (arr2D[i][j]) {
                case 2:
                    gameElement.classList.add("cloud-tile");
                    break;
                case 3:
                    gameElement.classList.add("grass-tile");
                    break;
                case 4:
                    gameElement.classList.add("soil-tile");
                    break;
                case 5:
                    gameElement.classList.add("tree-tile");
                    break;
                case 6:
                    gameElement.classList.add("tree-leaves-tile");
                    break;
                case 7:
                    gameElement.classList.add("rock-tile");
                    break;
                default:
                    break;
            }
            board.appendChild(gameElement);
        }
    }
};
