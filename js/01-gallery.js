import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const cardMarkup = galleryItems
    .map(
        ({ preview, original, description}) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}">
            </a>
        </li>`
    )
    .join("");

    gallery.insertAdjacentHTML("beforeend", cardMarkup);

    gallery.addEventListener('click', onImgClick);

    function onImgClick(event) {
        event.preventDefault();
        if (event.target.nodeName !== "IMG") {
            return;
        }

        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}">`,
            {
                onShow: (instance) => window.addEventListener('keydown', closeEscape),
                onClose: (instance) => window.removeEventListener('keydown', closeEscape),
            }
        );
        instance.show();

        function closeEscape(event) {
            if (event.code === 'Escape') {
                instance.close(); 
            }
        }

       // window.addEventListener('keydown', (event) => {
       //     if (event.code === 'Escape') {
       //         instance.close();
       //     }
       // });
    }

console.log(galleryItems);

// const instance = basicLightbox.create(html, {
//		onShow: (instance) => віндоу.додаємоСлухача(‘кідаун, закриттяЕскейп),
//		onClose: (instance) => віндоу.знімаємоСлухача(‘кідаун', закриттяЕскейп)
//	})