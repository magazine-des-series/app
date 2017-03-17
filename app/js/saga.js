import { select, call, put, takeLatest } from 'redux-saga/effects';
import api from './Api';
import * as peopleActions from './peoples/actions/actions';
import { getPeoples } from './selectors';

function* fetchPeople(action) {
  try {
    const id = action.peopleId;
    const peopleData = yield call(api.fetchPeople, action.peopleId);
    yield put({ type : peopleActions.PEOPLE_RECEIVED, people : peopleData.data });
    if (!peopleData.data) return;
    const fullName = `${peopleData.data.lastName} ${peopleData.data.firstName}`;

    // GET NEXT PEOPLE
    try {
      const nextPeopleData = yield call(api.fetchNextPeople, id, fullName);
      let next = null;
      if (nextPeopleData.data && nextPeopleData.data.length > 0) next = nextPeopleData.data[0];
      yield put({ type : peopleActions.NEXT_PEOPLE_RECEIVED, people : next });
    } catch (e) {
      yield put({ type : peopleActions.NEXT_PEOPLE_FAILED, message : e.message });
    }

    // GET PREV PEOPLE
    try {
      const prevPeopleData = yield call(api.fetchPrevPeople, id, fullName);
      let prev = null;
      if (prevPeopleData.data && prevPeopleData.data.length > 0) prev = prevPeopleData.data[0];
      yield put({ type : peopleActions.PREV_PEOPLE_RECEIVED, people : prev });
    } catch (e) {
      yield put({ type : peopleActions.PREV_PEOPLE_FAILED, message : e.message });
    }
  } catch (e) {
    yield put({ type : peopleActions.PEOPLE_FETCH_FAILED, message : e.message });
  }
}

function* fetchPeoples(action) {
  try {
    const peoplesData = yield call(
      api.fetchPeoples,
      action.page,
      action.filter,
    );
    const peopleState = yield select(getPeoples);
    let lastPage = Math.ceil(peoplesData.total / peopleState.itemsPerPage) || 1;
    if (lastPage === 0) lastPage = 1;
    yield put({
      type : peopleActions.PEOPLES_RECEIVED,
      peoples : peoplesData.data,
      total : peoplesData.total,
      lastPage,
    });
  } catch (e) {
    yield put({ type : peopleActions.PEOPLES_FETCH_FAILED, message : e.message });
  }
}

function* fetchRelatedPeoples(action) {
  try {
    const peoplesData = yield call(
      api.fetchRelatedPeoples,
      action.currentId,
    );
    yield put({ type : peopleActions.RELATED_PEOPLES_RECEIVED, peoples : peoplesData.data });
  } catch (e) {
    yield put({ type : peopleActions.PEOPLES_FETCH_FAILED, message : e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(peopleActions.FETCH_PEOPLE, fetchPeople);
  yield takeLatest(peopleActions.FETCH_PEOPLES, fetchPeoples);
  yield takeLatest(peopleActions.FETCH_RELATED_PEOPLES, fetchRelatedPeoples);
}
