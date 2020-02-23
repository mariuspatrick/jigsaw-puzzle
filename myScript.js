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
    let temporaryCell = getElementStyle(firstCell)
    getElementStyle(firstCell) = 
}

function moveCell(firstCell, secondCell) {
  //Checks if secondCell has white background color and swaps cells

  if (getElementStyle(secondCell).backgroundColor == "white") {
    // getElement(secondCell).innerHTML = getElement(firstCell).innerHTML;

    let temporaryCell = getElement(firstCell).className;

    getElement(firstCell).className = getElement(secondCell).className;

    getElement(secondCell).className = temporaryCell;

    //console.log("my table: ", document.getElementsByClassName("main-table"));

    // let row = document.getElementsByClassName(row);
    // console.log("rows: ", row);

    // let table = document.getElementsByClassName("row").rows.length;
    // console.log("table", table);

    console.log("this is the elem: ", getElement(secondCell).className);

    // getElement(firstCell).innerHTML = "";

    // getElementStyle(secondCell).backgroundColor = getElementStyle(
    //   firstCell
    // ).backgroundColor;
    // getElementStyle(firstCell).backgroundColor = "white";
  } else {
    console.log("Error! Try a different cell.");
    console.log("this is the elem: ", getElement(firstCell).className);
  }
}

function clickTile(row, column) {
  let cell = document.getElementById("cell" + "-" + row + "-" + column);
  let tile = cell.className;

  console.log("cell: ", cell);

  if (tile != "tile16") {
  }
}
