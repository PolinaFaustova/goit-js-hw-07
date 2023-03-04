// Создание и рендер разметки по массиву данных
// galleryItems и предоставленному шаблону элемента галереи.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
let instance = null;

function createCardsGallery(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image lazyload"
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

function handleModalEscape(event) {
  if (event.code === "Escape" && instance.visible()) {
    instance.close();
    galleryContainer.removeEventListener("keydown", handleModalEscape);
  }
}

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bigModalImg = event.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${bigModalImg}" width="800" height="600">
`);
  instance.show();

  galleryContainer.addEventListener("keydown", handleModalEscape);
}

galleryContainer.addEventListener("click", handleGalleryClick);
