const NUM_ROWS = 16;
const NUM_COLS = 16;
const DIMENSIONS = 700;
let currentSize = 16;

function createGrid(rows, cols) {
  const grid = document.querySelector(".grid");

  currentSize = rows;

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

function resize() {
  let squaresPerSide = prompt("How many squares per side?");
  if (squaresPerSide !== null) {
    squaresPerSide = squaresPerSide > 100 ? 100 : squaresPerSide;
    createGrid(squaresPerSide, squaresPerSide);
  }
}

function clear() {
  let confirmReset = confirm("Are you sure you want to clear?");
  if (confirmReset !== null) {
    createGrid(currentSize, currentSize);
  }
}

createGrid(NUM_ROWS, NUM_COLS);
