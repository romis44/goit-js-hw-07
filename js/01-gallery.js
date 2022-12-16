import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(createGallery(galleryItems));

const galleryEl = document.querySelector(".gallery");
const galleryMarcup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarcup);

function createGallery(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

galleryEl.addEventListener("click", (eve) => {
  eve.preventDefault();

  if (eve.target.nodeName !== "IMG") {
    return;
  }

  const bigImage = eve.target.getAttribute("data-source");

  const instance = basicLightbox.create(
    `
    <img src = "${bigImage}" width "800" height = "600">
    `
  );

  instance.show();
});

// galleryEl.addEventListener("click", galleryImgOnClick);

// function galleryImgOnClick(event) {
//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }
//   //   event.target.classList.add(".gallery__link");
//   const parentGallery = event.target.closest(".gallery__item");
//   parentGallery.classList.add(".gallery__link");

//   console.log(parentGallery);
