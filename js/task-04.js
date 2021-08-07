
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
    let val = Number(refs.counterValue.textContent);
    console.log(val);
    refs.counterValue.textContent = val += 1;
};

function onBtnDecrement() {
    let val = Number(refs.counterValue.textContent);
    console.log(val);
    refs.counterValue.textContent = val -= 1;
};









