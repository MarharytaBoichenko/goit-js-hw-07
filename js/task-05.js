
const refs = {
    inputEl: document.querySelector("#name-input"),
    spanEl: document.querySelector("#name-output"),
};

console.log(refs.inputEl);
console.log(refs.spanEl);

refs.inputEl.addEventListener("input", onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);
 
refs.spanEl.textContent = event.currentTarget.value.trim() ? event.currentTarget.value.trim() : "незнакомец";

}














// const refs = {
//     input: document.querySelector("#name-input"),
//     output: document.querySelector("#name-output"),
// }

// console.log(refs.input);
// console.log(refs.output);

// refs.input.addEventListener("input", onInputChange)

// function onInputChange(event) {
//     if (event.currentTarget.value !== "") {
//        refs.output.textContent = event.currentTarget.value; 
//     } else {
//        refs.output.textContent === "незнакомец" 
//     }
    
// } 
// не нужна ли какая проверка на это ??
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.  