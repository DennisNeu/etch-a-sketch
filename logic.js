const container = document.querySelector(".grid-container");

function generateTiles(tilesNumber) {
    if (isNaN(tilesNumber)) {
        alert("Please enter a postive number!");
        return;
    }
    if (tilesNumber < 0) {
        alert("Please enter a postive number!");
        return;
    }

    for (i = 0; i < tilesNumber; i++) {
        const div = document.createElement("div");
        div.classList.add("tile");
    
        container.appendChild(div);
    } 
}

function deleteTiles() {
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
        container.removeChild(tile);
    });
}

generateTiles(12);