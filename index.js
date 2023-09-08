const sketchDiv = document.querySelector(".sketch");
const singleCell = document.querySelector(".single-cell");
const buttonColor = document.querySelector(".btn-color");
const userInputValue = document.querySelector(".btn-size");


function createGrid(rows, columns) {



  
  for (i = 0; i < rows * columns; i++) {

  let singleCell = document.createElement("div");
  singleCell.classList.add("single-cell");
  
  sketchDiv.appendChild(singleCell);
}
}


createGrid(16, 16);







/*add eventListener to a button*/
buttonColor.addEventListener("click", colorChoice)





function colorChoice() {
  console.log("clicked")
}

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


document.body.onload = createGrid;

function createGridOnSize() {
/* num = prompt("Enter a value", "0");
  console.log(num); */

  userInputValue.addEventListener("click", changeSize);
  
  
 
  
    /*"input", () => {
    rows = userInputValue.value;
    columns = userInputValue.value; 
  });*/
    
}

/*
};
*/
function changeSize() {
  let userChoice = prompt("Enter a value", "0")
  let rows = userChoice;
  let columns = userChoice;
  console.log(rows);
  console.log(columns);
}


