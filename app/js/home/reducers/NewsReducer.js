import * as actions from '../actions/actions';

const initialState = {
  items : [],
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case actions.NEWS_RECEIVED:
      return Object.assign({}, state, { items : action.news });
    default:
      return state;
  }
}
