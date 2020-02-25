getElement = element => {
  return document.getElementById(element);
};

tileIsWhite = (row, column) => {
  if (getElement(`cell-${row}-${column}`).className == "tile16") {
    return true;
  }
};

didWin = (row, column) => {
  let loopCount = 0;
  let tilesNotWrong = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      loopCount += 1;
      if (
        document.getElementsByClassName("main-table")[0].children[i].children[j]
          .className == `tile${loopCount}`
      ) {
        tilesNotWrong += 1;
        console.log("tilesNotWrong: ", tilesNotWrong);
      }
    }
    if (tilesNotWrong === 16) {
      console.log("You win");
      return;
    }
  }
};

// didWin = () => {
//   console.log(
//     "table",
//     document.getElementsByClassName("main-table")[0].children[2].children[3]
//       .className
//   );
//   // console.log("children", document.body.children.length);
// };

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
