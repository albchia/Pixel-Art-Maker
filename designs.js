// Creation of global variables
let pickColor = document.querySelector("#colorPicker");
let colorSelected = pickColor.value;
// Initialization of counter to create unique ids for each cell of the grid
let idCellCounter = 0;
let grid = "";

// Creation of grid with nested for loop
// (parent loop for the creation of rows and child loop for the creation of columns)
function makeGrid(gridRows, gridColumns) {
  for (let a = 1; a <= gridRows; a++) {
    grid += `<tr class="row${a}">`;
    for (let b = 1; b <= gridColumns; b++) {
      idCellCounter++;
      grid += `<td class="col${b}" id="cell${idCellCounter}"></td>`;
    }
    grid += "</tr>";
  }
  document.querySelector("#pixel_canvas").innerHTML = grid;
};

// Function called on form submission to create the table
// using the height and width values as input parameters
document.querySelector('#sizePicker').onsubmit = () => {
  event.preventDefault();
  grid = "";
  let gridHeight = document.querySelector('#input_height').value;
  let gridWidth = document.querySelector('#input_width').value;
  makeGrid(gridHeight, gridWidth);
};

// Function which sets the cell's background color to the color selected.
// If no color is selected, it sets the background color to the default color (see variable in line 3)
document.querySelector("#pixel_canvas").addEventListener('click', function (event) {
  event.preventDefault();
  let getCellId = event.target.getAttribute("id");
  document.getElementById(getCellId).style.backgroundColor = colorSelected;
}, false);

// Function to get selected color on click
pickColor.addEventListener("input", function() {
    colorSelected = pickColor.value;
});