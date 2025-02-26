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
  btnLoadMore: document.querySelector('.js-btn-load'),
};

const params = {
  userValue: '',
  page: 1,
  total: 100,
};

let lightbox = new SimpleLightbox('.img-list a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

refs.formInput.addEventListener('submit', async e => {
  e.preventDefault();

  params.userValue = e.target.elements.imgTitle.value.trim();
  params.page = 1;

  refs.imgList.innerHTML = '';
  refs.loader.style.display = 'block';
  try {
    const response = await searchImages(params.userValue, params.page);
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
    params.total = response.data.totalHits;
    checkBtnStatus();
  } catch (error) {
    refs.loader.style.display = 'none';
  }
  e.target.reset();
});

function renderImgs(images) {
  const markup = imageTemplate(images);
  refs.imgList.innerHTML = markup;
  lightbox.refresh();
}

refs.btnLoadMore.addEventListener('click', async e => {
  params.page += 1;
  checkBtnStatus();
  const response = await searchImages(params.userValue, params.page);
  const markup = imageTemplate(response.data);
  refs.imgList.insertAdjacentHTML('beforeend', markup);
});

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('visually-hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('visually-hidden');
}

function checkBtnStatus() {
  const perPage = 40;
  const maxPage = Math.ceil(params.total / perPage);
  if (params.page >= maxPage) {
    hideLoadMoreBtn();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomRight',
    });
  } else {
    showLoadMoreBtn();
  }
}
