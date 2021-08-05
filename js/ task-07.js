// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

    
{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(input);
console.log(input.value);
console.log(text);
console.log(text.style.fontSize);
input.addEventListener("input", onInputChange);


function onInputChange(e) {
    console.log(e);
    console.log(e.currentTarget.value);
    text.style.fontSize = e.currentTarget.value + "px";
  
   
}