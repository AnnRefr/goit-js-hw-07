import { galleryItems } from "./gallery-items.js";
// Change code below this line
const sellectGallery = document.querySelector(".gallery");

sellectGallery.insertAdjacentHTML("beforeend", createImgCard(galleryItems));

function createImgCard() {
  return galleryItems
    .map(({ preview, original, description }) => {
      sellectGallery.addEventListener("click", galleryCardClick);
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}"
                data-source="${original}"
                alt="${description}"/></a></div>`;
    })
    .join("");
}
function galleryCardClick(e) {
  e.preventDefault();
}
sellectGallery.onclick = () => {
  basicLightbox
    .create(
      `
    <img src="${event.target.dataset.source}">`
    )
    .show();
};
