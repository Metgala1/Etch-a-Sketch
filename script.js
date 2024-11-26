const gridContainer = document.querySelector(".grid-container")
const button = document.querySelector("button")


button.addEventListener("click", () => {
    const input = Number(prompt("Enter new size"))
    gridContainer.innerHTML = " "
    if(input <= 100){
        createGrid(input)
    }else{
        alert("Do not exceed 100")
    }
    
})

const setColor = (item) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    item.style.backgroundColor = `rgb(${r},${g},${b})`

}



function createGrid(size) {
    for (let i = 1; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `320`/ size + "px";
        gridItem.style.border = "1px solid black";
        gridItem.addEventListener("mouseover", () => {
            setColor(gridItem)
        })
        gridContainer.appendChild(gridItem);
    }
    
}

createGrid(16)