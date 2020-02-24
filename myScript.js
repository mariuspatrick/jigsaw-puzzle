getElement = element => {
  return document.getElementById(element);
};

getElementClassName = element => {
  return document.getElementById(element).className;
};

tileIsWhite = tile => {
  //   console.log("element style: ", getElement(tile).style);
  //   if (getElement(tile).style.background == "white") return true;
  if (getElementClassName(tile) == "tile16") return true;
};

swapTiles = (firstCell, secondCell) => {
  //Swaps tiles if second one is white

  let temp = getElement(firstCell).className;

  getElement(firstCell).className = getElement(secondCell).className;

  getElement(secondCell).className = temp;
};

moveTile = (row, column) => {
  //Checks tile on the right
  if (tileIsWhite(`cell-${row}-${column + 1}`)) {
    console.log("first tile: ", `cell-${row}-${column}`);
    console.log("second tile: ", `cell-${row}-${column + 1}`);
    swapTiles(`cell-${row}-${column}`, `cell-${row}-${column + 1}`);
    return;
  }

  //Checks tile on the left
  if (tileIsWhite(`cell-${row}-${column - 1}`)) {
    swapTiles(`cell-${row}-${column}`, `cell-${row}-${column - 1}`);
    return;
  }

  //Checks tile above
  if (tileIsWhite(`cell-${row + 1}-${column}`)) {
    swapTiles(`cell-${row}-${column}`, `cell-${row + 1}-${column}`);
    return;
  }

  //Checks tile below
  if (tileIsWhite(`cell-${row - 1}-${column}`)) {
    swapTiles(`cell-${row}-${column}`, `cell-${row - 1}-${column}`);
    return;
  }
};
