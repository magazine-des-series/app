import { combineReducers } from 'redux';
import news from './NewsReducer';
import contests from './ContestsReducer';
import podcasts from './PodcastsReducer';

export default combineReducers({ news, contests, podcasts });
