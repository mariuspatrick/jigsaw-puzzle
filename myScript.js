getElement = element => {
  return document.getElementById(element);
};

tileIsWhite = (row, column) => {
  if (getElement(`cell-${row}-${column}`).className == "tile16") {
    return true;
  } else {
    console.log("Error! Click a different tile");
  }
};

swapTiles = (firstCell, secondCell) => {
  //Swaps tiles if second one is white
  let temp = getElement(firstCell).className;

  getElement(firstCell).className = getElement(secondCell).className;

  getElement(secondCell).className = temp;
};

moveTile = (row, column) => {
  if (column < 4) {
    if (tileIsWhite(row, column + 1)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row}-${column + 1}`);
      return;
    }
  }

  if (column > 1) {
    if (tileIsWhite(row, column - 1)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row}-${column - 1}`);
      return;
    }
  }

  if (row < 4) {
    if (tileIsWhite(row + 1, column)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row + 1}-${column}`);
      return;
    }
  }

  if (row > 1) {
    if (tileIsWhite(row - 1, column)) {
      swapTiles(`cell-${row}-${column}`, `cell-${row - 1}-${column}`);
      return;
    }
  }
};
