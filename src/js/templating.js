import items from '../templates/gallery-items.hbs';
import menu from '../menu.json';

console.log(menu);

const markup = items(menu);

console.log(markup);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);
