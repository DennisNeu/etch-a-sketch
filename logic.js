const container = document.querySelector(".grid-container");

function generateTiles(tilesNumber) {
    const rows = document.querySelectorAll(".row");
    
    rows.forEach((row) => {
        for (i = 0; i < tilesNumber; i++) {
            const div = document.createElement("div");
            div.classList.add("tile");

            row.appendChild(div);
        }
    });
}

function generateRows(rowsNumber) {
    for (i = 0; i < rowsNumber; i++) {
        const div = document.createElement("div");
        div.classList.add("row");

        container.appendChild(div)
    }
}

function deleteTiles() {
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
        container.removeChild(tile);
    });
}

generateRows(64);
generateTiles(64);