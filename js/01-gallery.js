import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const createGallery = createItem(galleryItems);
gallery.innerHTML = createGallery;

function createItem(items) {
  return items
    .map(
      (item) =>
        ` <a class="gallery__link"
        href="${item.original}">
        <img class="gallery__image"
data-source="${item.original}"
         src="${item.preview}"
         alt="${item.description}"></img>
        </a>`
    )
    .join("");
}

gallery.addEventListener("click", selectItems);
function selectItems(evt) {
  evt.preventDefault();
  if (evt.target.classList.value !== "gallery__image") {
    return;
  }

  const originalImg = evt.target.dataset.source;
  console.log(originalImg);
  onBasicLightbox(originalImg);
  function onBasicLightbox(img) {
    const instance = basicLightbox.create(
      `<img src="${img}" width="800" height="600">`
    );

    instance.show();
  }
}
