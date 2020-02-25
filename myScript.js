getElement = element => {
  return document.getElementById(element);
};

tileIsWhite = (row, column) => {
  if (getElement(`cell-${row}-${column}`).className == "tile16") {
    return true;
  }
};

shuffleTiles = () => {
  for (let row = 1; row <= 4; row++) {
    for (let column = 1; column <= 4; column++) {
      let rowToSwap = Math.floor(Math.random() * 4 + 1);
      let columnToSwap = Math.floor(Math.random() * 4 + 1);

      swapTiles(`cell-${row}-${column}`, `cell-${rowToSwap}-${columnToSwap}`);
    }
  }
};

didWin = (row, column) => {
  let loopCount = 0;
  let tilesNotWrong = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // Loops through the table like a 2D array and checks if tiles are
      // in their right position

      loopCount += 1;
      if (
        // Looping through the children of main table
        document.getElementsByClassName("main-table")[0].children[i].children[j]
          .className == `tile${loopCount}`
      ) {
        tilesNotWrong += 1;
      }
    }
    if (tilesNotWrong === 16) {
      let h1 = document.createElement("H1");
      let text = document.createTextNode("You are a monk");

      h1.appendChild(text);
      document.body.appendChild(h1);

      return;
    }
  }
};

swapTiles = (firstCell, secondCell) => {
  let temporaryCell = getElement(firstCell).className;

  getElement(firstCell).className = getElement(secondCell).className;

  getElement(secondCell).className = temporaryCell;
};

moveTile = (row, column) => {
  //Checks up, down, left, right if there is a white tile, and moves there

  if (column < 4) {
    if (tileIsWhite(row, column + 1)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row}-${column + 1}`);
      didWin(row, column);
      return;
    }
  }

  if (column > 1) {
    if (tileIsWhite(row, column - 1)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row}-${column - 1}`);
      didWin(row, column);
      return;
    }
  }

  if (row < 4) {
    if (tileIsWhite(row + 1, column)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row + 1}-${column}`);
      didWin(row, column);
      return;
    }
  }

  if (row > 1) {
    if (tileIsWhite(row - 1, column)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row - 1}-${column}`);
      didWin(row, column);
      return;
    }
  }
};
