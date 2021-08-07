const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector("#ingredients")
console.log(list);

const createItems = ingredients => {
  return ingredients.map(elem => {
    const oneItem = document.createElement("li");
    oneItem.textContent = elem;
    return oneItem;
  });
};
console.log(createItems(ingredients));
const allItems = createItems(ingredients);
console.log(allItems);

list.append(...allItems);




