const NUM_ROWS = 16;
const NUM_COLS = 16;
const DIMENSIONS = 700;

function createGrid(rows, cols) {
  const grid = document.querySelector(".grid");

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  let sideLength = DIMENSIONS / rows;

  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    for (let j = 0; j < cols; j++) {
      let box = document.createElement("div");
      box.classList.add("square");
      box.style.cssText =
        "height: " + sideLength + "px; width: " + sideLength + "px;";
      box.addEventListener("mouseenter", function (e) {
        e.target.classList.add("black");
      });
      row.appendChild(box);
    }
  }
}

function reset() {
  let squaresPerSide = prompt("How many squares per side?");
  squaresPerSide = squaresPerSide > 100 ? 100 : squaresPerSide;
  createGrid(squaresPerSide, squaresPerSide);
}

createGrid(NUM_ROWS, NUM_COLS);
