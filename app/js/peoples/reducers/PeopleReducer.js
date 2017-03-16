import * as actions from '../actions/actions';

const initialState = {
  current : null,
  prev : null,
  next : null,
  relatedPeoples : [],
};

/**
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object} the new state
 */
export default function people(state = initialState, action) {
  switch (action.type) {
    case actions.PEOPLE_RECEIVED:
      return Object.assign({}, state, { current : action.people });
    case actions.NEXT_PEOPLE_RECEIVED:
      return Object.assign({}, state, { next : action.people });
    case actions.NEXT_PEOPLE_FAILED:
      return Object.assign({}, state, { next : null });
    case actions.PREV_PEOPLE_RECEIVED:
      return Object.assign({}, state, { prev : action.people });
    case actions.PREV_PEOPLE_FAILED:
      return Object.assign({}, state, { prev : null });
    case actions.RELATED_PEOPLES_RECEIVED:
      return Object.assign({}, state, { relatedPeoples : action.peoples });
    default:
      return state;
  }
}
