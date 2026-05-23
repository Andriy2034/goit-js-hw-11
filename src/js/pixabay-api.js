import axios from 'https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55989973-0c204e1f9b56f2479f06f3a7c';


export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
