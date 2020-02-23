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

getElementStyle = element => {
  return document.getElementById(element).style;
};

switchStyles = (firstCell, secondCell) => {
  let temporaryCell = getElementStyle(firstCell).backgroundColor;
  getElementStyle(firstCell).backgroundColor = getElementStyle(
    secondCell
  ).backgroundColor;
  getElementStyle(secondCell).backgroundColor = temporaryCell;
};

function moveCell(firstCell, secondCell) {
  //Checks if secondCell has white background color and swaps cells

  if (getElementStyle(secondCell).backgroundColor == "white") {
    switchStyles(firstCell, secondCell);

    console.log("this is the elem: ", getElement(secondCell).className);
  } else {
    console.log("Error! Try a different cell.");
    console.log("this is the elem: ", getElement(firstCell).className);
  }
}

function clickTile(row, column) {
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      let whiteCell = getElementStyle(`"cell-"${row}"-"${column}"-"`)
        .backgroundColor;

      if (
        getElementStyle(`"cell-"${row}"-"${column}"-"`).backgroundColor ==
        "white"
      ) {
        switchStyles();
      }
    }
  }
}
