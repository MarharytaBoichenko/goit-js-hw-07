const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// // Напиши скрипт, который для каждого элемента массива ingredients 
// создаст
// // отдельный li, после чего вставит все li за одну операцию в 
// список ul.ingredients.
// // Для создания DOM - узлов используй document.createElement().

const listEl = document.querySelector("#ingredients");
console.log(listEl);

const makeItem = ingredients => {
    return ingredients.map(ingredient => {
        const oneItemEl = document.createElement("li");
        oneItemEl.textContent = ingredient;
        return oneItemEl;
    });
};

console.log(makeItem(ingredients));
const allItems = makeItem(ingredients);

listEl.append(...allItems);