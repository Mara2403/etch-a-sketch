/*add eventListener to a button*/
const buttonColor = document.querySelector(".btn-color");
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


document.body.onload = createDivs;

function createDivs(num) {
 num = prompt("Enter a value", "0");
  console.log(num);

for (let i = 0; i < num; i++) {

  const newDiv = document.createElement("div");
  const content = document.createTextNode("hi");
  newDiv.appendChild(content);

  const sketchDiv = document.getElementById("sketch");
  sketchDiv.appendChild(newDiv);
}
};

