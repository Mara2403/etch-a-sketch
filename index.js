const sketchDiv = document.querySelector(".sketch");
const singleCell = document.querySelector(".single-cell");
const buttonColor = document.querySelector(".btn-color");
const userInputValue = document.querySelector(".btn-size");
const resetButton = document.querySelector(".btn-reset");



function createGrid(rows, columns) {


  for (i = 0; i < rows * columns; i++) {

  let singleCell = document.createElement("div");
  singleCell.classList.add("single-cell");
  
  sketchDiv.appendChild(singleCell);

  singleCell.addEventListener("mouseenter", (event) => event.target.style.backgroundColor = "black");
}
}


createGrid(16, 16);



const allCells = document.querySelectorAll(".single-cell");

/*
function resetGrid() {
  resetButton.addEventListener("click", function() {
    allCells.forEach(
      function(node) {
      node.style.backgroundColor = "beige";
    }
    );
    allNewCells.forEach(
      function(node) {
      node.style.backgroundColor = "beige";
    }
    );


})
}; 

resetGrid(); */






function customGridSize(rows, columns) {
  userInputValue.addEventListener("click", function() {
  let userChoice = prompt("Enter a value", "0")
    
  /* remove all divs created onload with createGrid(16, 16) */
  while (sketchDiv.firstChild) {
    sketchDiv.removeChild(sketchDiv.firstChild);
  }


  let customChoice = Math.floor(userChoice);
  rows = customChoice;
  columns = customChoice;

  /* create new custom divs */
  for (i = 0; i < rows * columns; i++) {

  let singleCellNew = document.createElement("div");
  singleCellNew.classList.add("single-cell-new");
  
  sketchDiv.appendChild(singleCellNew);

  singleCellNew.addEventListener("mouseenter", (event) => event.target.style.backgroundColor = "black");
};

  let allNewCells = document.querySelectorAll(".single-cell-new")
  console.log(allNewCells);

  let newFlexBasisValue = 480 / userChoice;
  newFlexBasisValue = newFlexBasisValue.toFixed(2) + "px";
    console.log(newFlexBasisValue);

  allNewCells.forEach(
  function(node) {
    node.style.flexBasis = newFlexBasisValue;
  });

  function resetNewGrid() {
    resetButton.addEventListener("click", function() {
    allNewCells.forEach(
      function(node) {
      node.style.backgroundColor = "beige";
    }
    );
})
};

resetNewGrid();
}
)
};

customGridSize();









function colorChoice() {
  console.log("clicked")
}

/*add eventListener to a button*/
buttonColor.addEventListener("click", colorChoice)


/* CREATE ONE DIV AND APPEND IT TO HTML INSIDE SKETCH DIV
document.body.onload = addElement;


function addElement() {
  const newDiv = document.createElement("div");
  const content = document.createTextNode("hi");
  newDiv.appendChild(content);

  const sketchDiv = document.getElementById("sketch");

  sketchDiv.appendChild(newDiv);
};
*/

/*
document.body.onload = createGrid;
*/



