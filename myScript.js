// function swapTiles(firstCell, secondCell) {
//   let temporaryCell = document.getElementById(firstCell).className;
//   //   let cellOne = document.getElementById(firstCell);
//   let cellTwo = document.getElementById(secondCell).className;

//   document.getElementById(firstCell).className = cellTwo;
//   cellTwo = temporaryCell;
// }

// let rowsLength = table.getElementsByClassName("row-1").cell;

getElement = element => {
  return document.getElementById(element);
};

getElementBackground = element => {
  return document.getElementById(element).style.background;
};

getTileOnLocation = (row, column) => {
  return getElementBackground(`"cell-"${row}"-"${column}`);
};

switchStyles = (firstCell, secondCell) => {
  let temporaryCell = getElementBackground(firstCell);
  getElementBackground(firstCell) = getElementBackground(secondCell);
  getElementBackground(secondCell) = temporaryCell;
};

function moveCell(firstCell, secondCell) {
  //Checks if secondCell has white background color and swaps cells

  if (getElementBackground(secondCell) == "white") {
    switchStyles(firstCell, secondCell);

    console.log("this is the elem: ", getElement(firstCell).className);
  } else {
    console.log("Error! Try a different cell.");
    console.log("this is the elem: ", getElement(firstCell).className);
  }
}

// function clickTile(row, column) {
//   for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= column; j++) {}
//   }
// }
