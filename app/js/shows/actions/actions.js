/*
 * action types
 */

export const FETCH_SHOW = 'FETCH_SHOW';
export const FETCH_SHOWS = 'FETCH_SHOWS';
export const FETCH_PREV_SHOW = 'FETCH_PREV_SHOW';
export const FETCH_NEXT_SHOW = 'FETCH_NEXT_SHOW';

export const SHOW_RECEIVED = 'SHOW_RECEIVED';
export const SHOWS_RECEIVED = 'SHOWS_RECEIVED';
export const NEXT_SHOW_RECEIVED = 'NEXT_SHOW_RECEIVED';
export const PREV_SHOW_RECEIVED = 'PREV_SHOW_RECEIVED';

export const SHOWS_FETCH_FAILED = 'SHOWS_FETCH_FAILED';
export const SHOW_FETCH_FAILED = 'SHOW_FETCH_FAILED';
export const NEXT_SHOW_FAILED = 'NEXT_SHOW_FAILED';
export const PREV_SHOW_FAILED = 'PREV_SHOW_FAILED';

/*
 * action creators
 */

 /**
  * Fetch a single show
  * @param {string} showId - show identifier
  * @returns {object} action
  */
export const fetchShow = showId => ({ type : FETCH_SHOW, showId });

/**
 * Fetch a page of shows
 * @param {int} [page = 1] - page number
 * @param {string} [filter = ''] - query filter
 * @returns {object} action
 */
export const fetchShows = (page, filter) => ({ type : FETCH_SHOWS, page : page || 1, filter : filter || '' });

/**
 * Fetch the show before a given identifier
  * @param {string} id - current show identifier
  * @param {string} fullName - current show full name
 * @returns {object} action
 */
export const fetchPrevShow = (id, fullName) => ({ type : FETCH_PREV_SHOW, id, fullName });

/**
 * Fetch the show after a given identifier
  * @param {string} id - current show identifier
  * @param {string} fullName - current show full name
 * @returns {object} action
 */
export const fetchNextShow = (id, fullName) => ({ type : FETCH_NEXT_SHOW, id, fullName });
