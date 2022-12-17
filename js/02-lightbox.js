import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarcup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarcup);

function createGallery(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <li>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
