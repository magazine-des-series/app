const api = {

  /** PEOPLES **/

  fetchPeople(id) {
    const url = `http://localhost:3000/peoples/${id}`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchPeoples(page = 1, filter = '') {
    const url = `http://localhost:3000/peoples?_page=${page}&_sort=lastName&lastName_like=${filter}`;
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
    const url = `http://localhost:3000/peoples?_page=1&id_ne=${id}`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchNextPeople(id, fullName) {
    if (!id || !fullName) return null;
    const url = `http://localhost:3000/peoples?_sort=lastName&_order=ASC&lastName_gte=${fullName}&id_ne=${id}&_limit=1`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

  fetchPrevPeople(id, fullName) {
    if (!id || !fullName) return null;
    const url = `http://localhost:3000/peoples?_sort=lastName&_order=DESC&lastName_lte=${fullName}&id_ne=${id}&_limit=1`;
    const opts = { method : 'GET' };
    return fetch(url, opts)
      .then(resp => resp.json())
      .then(data => ({ data }),
    );
  },

};

export default api;
