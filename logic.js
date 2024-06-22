const container = document.querySelector(".grid-container");
const button = document.querySelector("#reset");

button.addEventListener("click", regenerate);


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

function deleteRows() {
    const rows = document.querySelectorAll(".row");

    rows.forEach(row => {
        container.removeChild(row);
    });
}

function promptUser() {
    let rows = prompt("How many squares per side? Max. 100");

    while (isNaN(rows) || rows < 0 || rows > 100) {
        rows = prompt("How many squares per side? Max. 100");
    }


    return rows;
}

function regenerate() {
    rows = promptUser();

    deleteRows();
    generateRows(rows);
    generateTiles(rows);
}

function changeColor(e) {
    e.target.style.backgroundColor = "pink";
}

generateRows(16);
generateTiles(16);