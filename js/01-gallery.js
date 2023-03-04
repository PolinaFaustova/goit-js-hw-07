// Создание и рендер разметки по массиву данных
// galleryItems и предоставленному шаблону элемента галереи.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createCardsGallery(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

const cardsGallery = createCardsGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigModalImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${bigModalImg}" width="800" height="600">
`);

  instance.show();
}

galleryContainer.addEventListener("click", handleGalleryClick);
