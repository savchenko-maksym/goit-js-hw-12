import axios from 'axios';

export function searchImages(imgsName) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;

  const params = {
    key: '48904751-5a5ebea07cb3b99a0a07eaa8f',
    q: imgsName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const headers = { Accept: 'application/json' };

  return axios.get(url, { params, headers });
}
