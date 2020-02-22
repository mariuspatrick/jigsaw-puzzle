// function swapTiles(firstCell, secondCell) {
//   let temporaryCell = document.getElementById(firstCell).className;
//   //   let cellOne = document.getElementById(firstCell);
//   let cellTwo = document.getElementById(secondCell).className;

//   document.getElementById(firstCell).className = cellTwo;
//   cellTwo = temporaryCell;
// }

// function myMove() {
//   let cell = document.getElementById("tile-4-15");
//   let position = 0;
//   let id = setInterval(move, 5);

//   function move() {
//     if (position == 190) {
//       clearInterval(id);
//     } else {
//       position++;
//       //   console.log("position", position);
//       console.log("cell: ", cell);
//       cell.style.left = position + "px";
//       console.log("cell", cell.style);
//       //   console.log("style", cell.style.left);
//     }
//   }
// }

let table = document.getElementById("table");

let cell = document.getElementsByClassName("tile-1");

// let rowsLength = table.getElementsByClassName("row-1").cell;

console.log("table: ", cell);
