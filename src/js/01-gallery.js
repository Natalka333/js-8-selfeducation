// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// function sum(a, b) {
//     return a + b;
// };
// function add(x, y) {
//     return x * y;
// };
// export {sum, add};



import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryImage = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
    </a>
   </li>`;
    }).join('');

}

galleryImage.innerHTML = createGalleryItems(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed:	250,
    
});