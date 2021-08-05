
// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



 


const refs = {
    counterValue: document.querySelector("#value"),
    decrBtn: document.querySelector('[data-action="decrement"]'),
    incrBtn: document.querySelector('[data-action="increment"]'),
};

console.log(refs.counterValue.textContent);
console.log(refs.decrBtn);
console.log(refs.incrBtn);

refs.decrBtn.addEventListener("click", onBtnDecrement);
refs.incrBtn.addEventListener("click", onBtnIncrement);

function onBtnIncrement() {
    let val = Number(counterValue.textContent);
    console.log(val);
    counterValue.textContent = val += 1;

}



function onBtnDecrement() {
    let val = Number(counterValue.textContent);
    console.log(val);
    counterValue.textContent = val -= 1;
};





// ///////

// function createCounter() {
//   // LEXICAL ENVIRONMENT
//   let current = 0

//   function increment(value) {
//     return (current += value)
//   }

//   function decrement(value) {
//     if (current <= 0) return
//     return (current -= value)
//   }
//   // LEXICAL ENVIRONMENT
//   return { increment, decrement }
// }

// //////

// const { increment, decrement, current } = refs


// // console.log(createCounter);

// const counter1 = createCounter()
// // console.log(counter1);
// // console.dir(counter1);

// increment.addEventListener('click', () => {
//   let value = counter1.increment(1)
//   current.textContent = value
// })

// decrement.addEventListener('click', () => {
//   let value = counter1.decrement(1)
//   if (value) {
//     current.textContent = value
//   }
// })