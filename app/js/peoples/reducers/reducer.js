import {
  FETCH_PEOPLE,
  FETCH_PEOPLES,
  PEOPLE_RECEIVED,
  PEOPLES_RECEIVED
} from '../actions/actions';
import { combineReducers } from 'redux';

const initialState = {
    visiblePeoples : [],
    currentPage : 1,
    itemsPerPage : 10,
}

export default function peoples(state = initialState, action){
    switch(action.type){
        case FETCH_PEOPLE:
        case FETCH_PEOPLES:
        case PEOPLE_RECEIVED:
        case PEOPLES_RECEIVED:
            return Object.assign({},state,{visiblePeoples:action.peoples, currentPage:action.page});
        default:
            return state;
    }
}
