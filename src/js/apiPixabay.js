import axios from 'axios';

export class ApiPixabay {
  #API_KEY = '35174443-6d9c66fd3ae2eb6a6d3c5c31a';
  #BASE_URL = 'https://pixabay.com/api/';
  constructor() {
    this.searchValue = '';
    this.page = 1;
    this.per_page = 40;
    this.totalHits = null;
  }
  async getImages() {
    const result = await axios.get(this.#BASE_URL, {
      params: {
        key: this.#API_KEY,
        q: this.searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    });
    return result;
  }

  setSearchValue(searchValue) {
    this.searchValue = searchValue;
  }

  incrementPage() {
    this.page += 1;
  }

  setTotalHits(totalHits) {
    this.totalHits = totalHits;
  }

  resetPage() {
    this.page = 1;
  }

  checkLastPage() {
    return this.page === Math.ceil(this.totalHits / this.per_page);
  }

  get query() {
    return this.srchQuery;
  }

  set query(newQuery) {
    this.srchQuery = newQuery;
  }
}
