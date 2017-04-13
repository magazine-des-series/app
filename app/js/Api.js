const API_URL = process.env.API_URL;
const api = {

  /** PEOPLES **/

  fetchPeople(id) {
    const url = `${API_URL}/api:peoples/${id}`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchPeoples(page = 1, filter = '') {
    const url = `${API_URL}/api:peoples?_page=${page}&_sort=lastName&lastName_like=${filter}`;
    const opts = { method : 'GET' };
    let total = 0;
    return fetch(url, opts)
      .then((resp) => {
        total = resp.headers.get('X-Total-Count');
        return resp.json();
      })
      .then(data => ({ data, total }),
    );
  },

  fetchRelatedPeoples(id) {
    if (!id) return null;
    const url = `${API_URL}/api:peoples?_page=1&id_ne=${id}`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchNextPeople(id, fullName) {
    if (!id || !fullName) return null;
    const url = `${API_URL}/api:peoples?_sort=lastName&_order=ASC&lastName_gte=${fullName}&id_ne=${id}&_limit=1`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchPrevPeople(id, fullName) {
    if (!id || !fullName) return null;
    const url = `${API_URL}/api:peoples?_sort=lastName&_order=DESC&lastName_lte=${fullName}&id_ne=${id}&_limit=1`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  /** SHOWS **/

  fetchShow(id) {
    const url = `${API_URL}/api:shows/${id}`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchShows(page = 1, filter = '') {
    const url = `${API_URL}/api:shows?_page=${page}&_sort=title&title_like=${filter}`;
    const opts = { method : 'GET' };
    let total = 0;
    return fetch(url, opts)
      .then((resp) => {
        total = resp.headers.get('X-Total-Count');
        return resp.json();
      })
      .then(data => ({ data, total }),
    );
  },

  fetchNextShow(id, title) {
    if (!id || !title) return null;
    const url = `${API_URL}/api:shows?_sort=title&_order=ASC&title_gte=${title}&id_ne=${id}&_limit=1`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchPrevShow(id, title) {
    if (!id || !title) return null;
    const url = `${API_URL}/api:shows?_sort=title&_order=DESC&title_lte=${title}&id_ne=${id}&_limit=1`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchNews() {
    const url = `${API_URL}/api:news?_limit=5`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

};

export default api;
