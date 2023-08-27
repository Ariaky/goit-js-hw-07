import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const cardMarkup = galleryItems
    .map(
        ({ preview, original, description}) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                alt="${description}">
            </a>
        </li>`
    )
    .join("");

    gallery.insertAdjacentHTML("afterbegin", cardMarkup);

    const lightbox = new SimpleLightbox('.gallery__link', {
        captionsData: "alt", 
        captionDelay: 250, 
    });

console.log(galleryItems);
