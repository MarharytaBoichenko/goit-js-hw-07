const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для создания галлереи изображений по массиву данных.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.

const galleryList = document.querySelector("#gallery")

const createGallery = images => {
 return  images.map(image => { return `<li><img src = ${image.url}  alt= '${image.alt}' width = 200 ></li>` }).join("");
}

console.log(createGallery(images));
const stringImages = createGallery(images)

galleryList.insertAdjacentHTML("afterbegin", stringImages);










// const galeryList = document.querySelector("#gallery")
// console.log(galeryList);


// const makeGalleryItem = images.map(({ url, alt }) => {
//   return `<li><img src=${url} alt='${alt}' width=300 ></li>`

// }).join(" ")
// console.log(makeGalleryItem);

// galeryList.insertAdjacentHTML("beforeend", makeGalleryItem);