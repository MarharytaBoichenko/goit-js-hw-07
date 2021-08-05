// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
//в консоль текст заголовка элемента(тега h2) и количество элементов в 
//категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoryList = document.querySelector("#categories");
console.log(categoryList);
const items = document.querySelectorAll(".item");
console.log(items);
console.log(`В списке ${items.length} категории.`);

items.forEach(item => {
    const titleItem = item.firstElementChild.textContent;
    const ItemQuantity = item.lastElementChild.children.length;

    console.log(`Категория: ${titleItem} Количество элементов: ${ItemQuantity}`);
})