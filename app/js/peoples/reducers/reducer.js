import { combineReducers } from 'redux';
import people from './PeopleReducer';
import gallery from './PeoplesReducer';

export default combineReducers({ people, gallery });
