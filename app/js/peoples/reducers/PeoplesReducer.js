import * as actions from '../actions/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';

const initialState = {
    visiblePeoples : [],
    currentPage : 1,
    itemsPerPage : 10,
    lastPage : 1,
    filter : ""
}

export default function gallery(state = initialState, action){
    switch(action.type){
        case actions.PEOPLES_RECEIVED:
            return Object.assign( {}, state, {visiblePeoples:action.peoples, lastPage : action.lastPage} );
        case LOCATION_CHANGE:
            let pathname = action.payload.pathname;
            let query = action.payload.query;
            if(pathname != "/peoples") return state;
            let newPage = query.page || 1;
            let filter = query.search || "";
            if (newPage == state.currentPage && filter == state.filter) return state;
            else return Object.assign( {}, state, {currentPage:newPage, filter:filter} );
        default:
            return state;
    }
}
