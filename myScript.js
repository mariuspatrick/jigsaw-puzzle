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

function moveCell(firstCell, secondCell) {
  console.log("firstCell: ", firstCell);
  console.log("secondCell: ", getElement(secondCell));
  if (getElement(secondCell).style.backgroundColor == "white") {
    getElement(secondCell).innerHTML = getElement(firstCell).innerHTML;

    getElement(firstCell).innerHTML = "";
    getElement(secondCell).style.backgroundColor = getElement(
      firstCell
    ).style.backgroundColor;
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

console.log("this is x: ", document.getElementById("table").row);
