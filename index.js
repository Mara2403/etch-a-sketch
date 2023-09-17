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

  singleCell.addEventListener("click", (event) => event.target.style.backgroundColor = "beige");
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

userInputValue.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);



function customGridSize(rows, columns) {
  userInputValue.addEventListener("click", function() {
  

  const form = document.getElementById("myForm");
  form.addEventListener("submit", function(event) {
  event.preventDefault();
 
  let userChoice = document.querySelector("#user-input").value;
 
  /* remove all divs first */
  while (sketchDiv.firstChild) {
    sketchDiv.removeChild(sketchDiv.firstChild);
  }

  const customChoice = Number(userChoice);
  console.log(customChoice);

  const modal1 = document.querySelector(".modal1");
  const openModal1 = function () {
    modal1.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  if (customChoice <=100) {
    true;
  } else {
      openModal1();
    };

  const closeModal1 = function () {
    modal1.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  overlay.addEventListener("click", closeModal1);

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
    });
    })
  };

  resetNewGrid();
  })
  })
};
 
customGridSize();


buttonColor.addEventListener("click", colorChoice);

function colorChoice() {
  const allCells = document.querySelectorAll(".single-cell")

  allCells.forEach(
    function(node) {
    node.addEventListener("mouseenter", (event) => event.target.style.backgroundColor = createRandomRgbColor());
    node.addEventListener("click", (event) => event.target.style.backgroundColor = "beige");
  })
};

function createRandomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")"; 
};
console.log(createRandomRgbColor());

