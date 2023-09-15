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
};

createGrid(16, 16);



const allCells = document.querySelectorAll(".single-cell");


function resetGrid() {
  resetButton.addEventListener("click", function() {
    while (sketchDiv.firstChild) {
      sketchDiv.removeChild(sketchDiv.firstChild)
    };
  createGrid(16,16);
  })
}; 

resetGrid();
/*
const modal = document.querySelector("#modal");
  const closeModal= document.querySelector("#btn-close");
  
  userInputValue.addEventListener("click", () => {
    modal.showModal();
  });
  
  closeModal.addEventListener("click", () => {
    modal.close();
  }); */
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const openModalBtn = document.querySelector(".btn-size");
  const closeModalBtn = document.querySelector(".btn-close");

  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  userInputValue.addEventListener("click", openModal);  closeModalBtn.addEventListener("click", closeModal);

function customGridSize(rows, columns) {
  /*PROMPT - it works fine, but not pretty */
  userInputValue.addEventListener("click", function() {
  const userChoice = prompt("Enter a value", "0"); 
/*
 let form = document.querySelector(".form");
 form.addEventListener("submit", function (e) {
  e.preventDefault()
  let formdata = new FormData(this);
  let userChoice = formdata.get("my-input");
  console.log(userChoice);
*/
  /* remove all divs first */
  while (sketchDiv.firstChild) {
    sketchDiv.removeChild(sketchDiv.firstChild);
  }

  /*const customChoice = Math.floor(userChoice); */
  const customChoice = Number(userChoice);
  console.log(customChoice);

  
  if (customChoice < 100) {
    true;
  } else {
    alert("Please, enter an integer number smaller than 100.");
    return;
  };


  rows = customChoice;
  columns = customChoice;

  createGrid(rows, columns);

  const allNewCells = document.querySelectorAll(".single-cell");

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

})}
 /* )};*/

customGridSize();



/*add eventListener to a button*/
buttonColor.addEventListener("click", colorChoice);


function colorChoice() {
  const allCells = document.querySelectorAll(".single-cell")

  allCells.forEach(
    function(node) {
    node.addEventListener("mouseenter", (event) => event.target.style.backgroundColor = createRandomRgbColor());
    
  })
};

function createRandomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")"; 
};
console.log(createRandomRgbColor());

