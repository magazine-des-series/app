/*
 * action types
 */

export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_LAST_CONTESTS = 'FETCH_LAST_CONTESTS';
export const FETCH_LAST_PODCASTS = 'FETCH_LAST_PODCASTS';

export const LAST_PODCASTS_RECEIVED = 'LAST_PODCASTS_RECEIVED';
export const LAST_CONTESTS_RECEIVED = 'LAST_CONTESTS_RECEIVED';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

export const LAST_PODCASTS_FETCH_FAILED = 'LAST_PODCASTS_FETCH_FAILED';
export const LAST_CONTESTS_FETCH_FAILED = 'LAST_CONTESTS_FETCH_FAILED';
export const NEWS_FETCH_FAILED = 'NEWS_FETCH_FAILED';

export const SLIDER_NEWS_NEXT = 'SLIDER_NEWS_NEXT';
export const SLIDER_NEWS_PREV = 'SLIDER_NEWS_PREV';

/*
 * action creators
 */

 /**
  * Fetch the last contests
  * @returns {object} action
  */
export const fetchLastContests = () => ({ type : FETCH_LAST_CONTESTS });
export const fetchNews = () => ({ type : FETCH_NEWS });
export const fetchLastPodcasts = () => ({ type : FETCH_LAST_PODCASTS });

export const sliderNext = () => ({ type : SLIDER_NEWS_NEXT });
export const sliderPrev = () => ({ type : SLIDER_NEWS_PREV });
