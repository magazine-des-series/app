import * as actions from '../actions/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';

const initialState = {
    current : null,
    prev : null,
    next : null,
    relatedPeoples : [],
}

export default function people(state = initialState, action){
    switch(action.type){
        case actions.PEOPLE_RECEIVED:
            return Object.assign( {}, state, {current:action.people} );
        case actions.NEXT_PEOPLE_RECEIVED:
            return Object.assign( {}, state, {next:action.people} );
        case actions.PREV_PEOPLE_RECEIVED:
            return Object.assign( {}, state, {prev:action.people} );
        case actions.RELATED_PEOPLES_RECEIVED:
            return Object.assign( {}, state, {relatedPeoples:action.peoples} );
        default:
            return state;
    }
}
