const NUM_ROWS = 4;
const NUM_COLS = 4;

function createGrid(rows, cols) {
  const grid = document.querySelector(".grid");

  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    for (let j = 0; j < cols; j++) {
      let box = document.createElement("div");
      box.classList.add("square");
      row.appendChild(box);
    }
  }
}

createGrid(NUM_ROWS, NUM_COLS);
