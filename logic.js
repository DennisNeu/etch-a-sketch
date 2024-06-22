const container = document.querySelector(".grid-container");

function generateTiles(tilesNumber) {
    const rows = document.querySelectorAll(".row");
    
    rows.forEach((row) => {
        for (i = 0; i < tilesNumber; i++) {
            const div = document.createElement("div");
            div.classList.add("tile");
            div.addEventListener("mouseover", function (e) {
                changeColor(e);
            });

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

function changeColor(e) {
    e.target.style.backgroundColor = "pink";
}

generateRows(16);
generateTiles(16);