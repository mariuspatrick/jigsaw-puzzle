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

function moveCell(firstCell, secondCell) {
  //Checks if secondCell has white background color and swaps cells

  if (getElementStyle(secondCell).backgroundColor == "white") {
    getElement(secondCell).innerHTML = getElement(firstCell).innerHTML;

    console.log("my table: ", document.getElementsByClassName("main-table"));

    getElement(firstCell).innerHTML = "";
    getElementStyle(secondCell).backgroundColor = getElementStyle(
      firstCell
    ).backgroundColor;
    getElement(firstCell).style.backgroundColor = "white";
  } else {
    console.log("Error! Try a different cell.");
  }
}

function clickTile(row, column) {
  let cell = document.getElementById("cell" + "-" + row + "-" + column);
  let tile = cell.className;

  console.log("cell: ", cell);

  if (tile != "tile16") {
  }
}
