
const categoryList = document.querySelector("#categories");
// console.log(categoryList);
// console.log(categoryList.children);
console.log(`В списке ${categoryList.children.length} категории.`);

const items = document.querySelectorAll(".item");
items.forEach(item => {
    const itemsTitle = item.firstElementChild.textContent;
    const itemsQuantity = item.lastElementChild.children.length;
    console.log(`Категория: ${itemsTitle} Количество элементов: ${itemsQuantity}` );

});











