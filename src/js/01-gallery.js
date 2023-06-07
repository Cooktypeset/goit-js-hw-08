// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}
const imagesMarkup = createImgMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);

