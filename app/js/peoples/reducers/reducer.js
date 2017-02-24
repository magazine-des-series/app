import * as actions from '../actions/actions';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
    visiblePeoples : [],
    currentPage : 1,
    itemsPerPage : 10,
    lastPage : 1,
    filter : "",
}

export default function peoples(state = initialState, action){
    switch(action.type){
        case actions.PEOPLES_RECEIVED:
            return Object.assign( {}, state, {visiblePeoples:action.peoples, lastPage : Math.ceil(action.total / state.itemsPerPage)} );
        case LOCATION_CHANGE:
            let pathname = action.payload.pathname;
            let query = action.payload.query;
            if(pathname != "/peoples") return state;
            let newPage = query.page || 1;
            if (newPage == state.currentPage) return state;
            else return Object.assign( {}, state, {currentPage:newPage} );
        default:
            return state;
    }
}
