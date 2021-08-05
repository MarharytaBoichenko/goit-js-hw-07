// Напиши скрипт, который бы при потере фокуса на инпуте, проверял
// его содержимое на правильное количество символов.

{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */}
   // Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// Если введено подходящее количество, то border инпута становится
// зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector("#validation-input")
console.log(input);
console.log(input.dataset.length);

input.addEventListener("blur", e => {
    console.log(e.currentTarget.value);
    console.log(typeof e.currentTarget.value.length);
    console.log(typeof Number(e.currentTarget.dataset.length));
    console.log(e.currentTarget.value.length === Number(e.currentTarget.dataset.length));

    if (e.currentTarget.value.length !== Number(e.currentTarget.dataset.length)) {
        e.currentTarget.classList.add('invalid');
       
    } else {
        if (e.currentTarget.classList.contains('invalid')) {
            e.currentTarget.classList.add('valid');
            e.currentTarget.classList.remove("invalid");
        }
    }
        
        }
    
    

);
