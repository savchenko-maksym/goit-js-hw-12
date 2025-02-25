import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-functions.js';

const refs = {
  formInput: document.querySelector('.js-create-form'),
  imgList: document.querySelector('.img-list'),
  loader: document.querySelector('.loader'),
};

let lightbox = new SimpleLightbox('.img-list a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

refs.formInput.addEventListener('submit', async e => {
  e.preventDefault();
  const userValue = e.target.elements.imgTitle.value.trim();
  refs.imgList.innerHTML = '';
  refs.loader.style.display = 'block';
  try {
    const response = await searchImages(userValue);
    refs.loader.style.display = 'none';
    if (response.data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    renderImgs(response.data);
  } catch (error) {
    refs.loader.style.display = 'none';
  }
  e.target.reset();
});

function renderImgs(images) {
  const markup = imageTemplate(images);
  refs.imgList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// !=============== comment
