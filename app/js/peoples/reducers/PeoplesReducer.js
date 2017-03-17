import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from '../actions/actions';

const initialState = {
  visiblePeoples : [],
  currentPage : 1,
  itemsPerPage : 10,
  lastPage : 1,
  filter : '',
};

/**
 * @param  {object} state  the state
 * @param  {object} action redux action
 * @return {object} the new state
 */
export default function gallery(state = initialState, action) {
  switch (action.type) {
    case actions.PEOPLES_RECEIVED:
      return Object.assign(
        {},
        state,
        { visiblePeoples : action.peoples, lastPage : action.lastPage },
      );
    case LOCATION_CHANGE: {
      const pathname = action.payload.pathname;
      const query = action.payload.query;
      if (pathname !== '/peoples') return state;
      const newPage = parseInt(query.page, 10) || 1;
      const newFilter = query.search || '';
      if (newPage === state.currentPage && newFilter === state.filter) return state;
      return Object.assign(
        {},
        state,
        { currentPage : newPage, filter : newFilter },
      );
    }
    default:
      return state;
  }
}
