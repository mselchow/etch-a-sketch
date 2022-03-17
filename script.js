const NUM_ROWS = 16;
const NUM_COLS = 16;

function createGrid(rows, cols) {
  const grid = document.querySelector(".grid");

  let sideLength = 1000 / rows;

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

createGrid(NUM_ROWS, NUM_COLS);
