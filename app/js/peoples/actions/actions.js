/*
 * action types
 */

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const FETCH_RELATED_PEOPLES = 'FETCH_RELATED_PEOPLES';
export const FETCH_PREV_PEOPLE = 'FETCH_PREV_PEOPLE';
export const FETCH_NEXT_PEOPLE = 'FETCH_NEXT_PEOPLE';

export const PEOPLE_RECEIVED = 'PEOPLE_RECEIVED';
export const PEOPLES_RECEIVED = 'PEOPLES_RECEIVED';
export const RELATED_PEOPLES_RECEIVED = 'RELATED_PEOPLES_RECEIVED';
export const NEXT_PEOPLE_RECEIVED = 'NEXT_PEOPLE_RECEIVED';
export const PREV_PEOPLE_RECEIVED = 'PREV_PEOPLE_RECEIVED';

export const PEOPLES_FETCH_FAILED = 'PEOPLES_FETCH_FAILED';
export const PEOPLE_FETCH_FAILED = 'PEOPLE_FETCH_FAILED';
export const RELATED_PEOPLES_FAILED = 'RELATED_PEOPLES_FAILED';
export const NEXT_PEOPLE_FAILED = 'NEXT_PEOPLE_FAILED';
export const PREV_PEOPLE_FAILED = 'PREV_PEOPLE_FAILED';


/*
 * action creators
 */

 /**
  * Fetch a single people
  * @param {string} peopleId - people identifier
  * @returns {object} action
  */
export const fetchPeople = peopleId => ({ type : FETCH_PEOPLE, peopleId });

/**
 * Fetch a page of peoples
 * @param {int} [page = 1] - page number
 * @param {string} [filter = ''] - query filter
 * @returns {object} action
 */
export const fetchPeoples = (page, filter) => ({ type : FETCH_PEOPLES, page : page || 1, filter : filter || '' });

/**
 * Fetch related peoples for a given identifier
  * @param {string} currentId - people identifier
 * @returns {object} action
 */
export const fetchRelatedPeoples = currentId => ({ type : FETCH_RELATED_PEOPLES, currentId });

/**
 * Fetch the people before a given identifier
  * @param {string} id - current people identifier
  * @param {string} fullName - current people full name
 * @returns {object} action
 */
export const fetchPrevPeople = (id, fullName) => ({ type : FETCH_PREV_PEOPLE, id, fullName });

/**
 * Fetch the people after a given identifier
  * @param {string} id - current people identifier
  * @param {string} fullName - current people full name
 * @returns {object} action
 */
export const fetchNextPeople = (id, fullName) => ({ type : FETCH_NEXT_PEOPLE, id, fullName });
