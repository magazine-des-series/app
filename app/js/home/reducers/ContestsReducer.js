import * as actions from '../actions/actions';

const initialState = {
  items : [],
};

export default function contests(state = initialState, action) {
  switch (action.type) {
    case actions.LAST_CONTESTS_RECEIVED:
      return Object.assign({}, state, { items : action.contests });
    default:
      return state;
  }
}
