import { combineReducers } from 'redux';
import show from './ShowReducer';
import gallery from './ShowsReducer';

export default combineReducers({ show, gallery });
