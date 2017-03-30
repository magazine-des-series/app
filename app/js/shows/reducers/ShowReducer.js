import * as actions from '../actions/actions';

const initialState = {
  current : null,
  prev : null,
  next : null,
};

/**
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object} the new state
 */
export default function show(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_RECEIVED:
      return Object.assign({}, state, { current : action.show });
    case actions.NEXT_SHOW_RECEIVED:
      return Object.assign({}, state, { next : action.show });
    case actions.NEXT_SHOW_FAILED:
      return Object.assign({}, state, { next : null });
    case actions.PREV_SHOW_RECEIVED:
      return Object.assign({}, state, { prev : action.show });
    case actions.PREV_SHOW_FAILED:
      return Object.assign({}, state, { prev : null });
    default:
      return state;
  }
}
