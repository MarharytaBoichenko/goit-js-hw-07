
const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    // console.log(event.currentTarget.value.length);
    // console.log(typeof event.currentTarget.value.length);
    // console.log(inputEl.dataset.length);
    // console.log(typeof Number(inputEl.dataset.length));


    const { value, dataset } = event.currentTarget;

if (value.length !== Number(dataset.length)) {
inputEl.classList.add('invalid');
inputEl.classList.remove('valid');
return;
}
inputEl.classList.add('valid');
inputEl.classList.remove('invalid');
////или ниже 
    
    //// 

    // if (value.length === Number(dataset.length) && !event.currentTarget.classList.contains("invalid")){
    //     event.currentTarget.classList.add("valid");
    // }
    // if ((value.length === Number(dataset.length) && event.currentTarget.classList.contains("invalid"))) {
    //     event.currentTarget.classList.replace("invalid", "valid");
    // }
    //  if(value.length !== Number(dataset.length) && !event.currentTarget.classList.contains("valid")){
    //     event.currentTarget.classList.add("invalid");
    //  }
    //  if(value.length !== Number(dataset.length) && event.currentTarget.classList.contains("valid")){
    //     event.currentTarget.classList.replace("valid", "invalid");
    // }
    
};







