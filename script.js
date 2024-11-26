const gridContainer = document.querySelector(".grid-container")

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16)