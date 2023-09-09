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


function resetGrid() {
  resetButton.addEventListener("click", function() {
    console.log("clicked");
    const singleCell = document.querySelectorAll(".single-cell");
    console.log(singleCell);
    singleCell.forEach(
      function(node, index) {
      node.style.backgroundColor = "beige";
    }
    );
})
};

resetGrid();



function changeSize() {
  let userChoice = prompt("Enter a value", "0")
console.log(userChoice);
}



function createGridOnSize() {

  userInputValue.addEventListener("click", changeSize);
let newNumberOfCells = 
    singleCell.style.flexBasis = newNumberOfCells
  }

/* createGridOnSize(); */






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



