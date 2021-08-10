const inputEl = document.querySelector("#quantity");
console.dir(inputEl);

const btnCreate = document.querySelector("[data-action='render']");
console.log(btnCreate);
const btnClear = document.querySelector('[data-action="destroy"]')
console.log(btnClear);

const boxesEl = document.querySelector("#boxes")
console.log(boxesEl);

btnCreate.addEventListener("click", createBoxes)
btnClear.addEventListener("click", destroyBoxes);

function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min; 
}
let count = 0;   

function createBoxes(amount) {
    amount = inputEl.value;
 
    for (let i = 0; i < amount; i++) { 
        const oneDiv = document.createElement("div");

        oneDiv.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        oneDiv.style.width = `${30 + count * 10}px`;
        oneDiv.style.height = `${30 + count * 10}px`;

  count += 1;  
       
boxesEl.append(oneDiv)
    }  
};

function destroyBoxes() {
  boxesEl.innerHTML = ''; 
}



