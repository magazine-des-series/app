import { select, call, put, takeLatest } from 'redux-saga/effects';
import api from './Api';
import * as peopleActions from './peoples/actions/actions';
import * as showActions from './shows/actions/actions';
import * as homeActions from './home/actions/actions';
import { getPeoples, getShows } from './selectors';

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

function* fetchShow(action) {
  try {
    const id = action.showId;
    const showData = yield call(api.fetchShow, action.showId);
    yield put({ type : showActions.SHOW_RECEIVED, show : showData.data });
    if (!showData.data) return;
    const title = `${showData.data.title}`;

    // GET NEXT SHOW
    try {
      const nextShowData = yield call(api.fetchNextShow, id, title);
      let next = null;
      if (nextShowData.data && nextShowData.data.length > 0) next = nextShowData.data[0];
      yield put({ type : showActions.NEXT_SHOW_RECEIVED, show : next });
    } catch (e) {
      yield put({ type : showActions.NEXT_PEOPLE_FAILED, message : e.message });
    }

    // GET PREV PEOPLE
    try {
      const prevShowData = yield call(api.fetchPrevShow, id, title);
      let prev = null;
      if (prevShowData.data && prevShowData.data.length > 0) prev = prevShowData.data[0];
      yield put({ type : showActions.PREV_SHOW_RECEIVED, show : prev });
    } catch (e) {
      yield put({ type : showActions.PREV_SHOW_FAILED, show : e.message });
    }
  } catch (e) {
    yield put({ type : showActions.SHOW_FETCH_FAILED, show : e.message });
  }
}

function* fetchShows(action) {
  try {
    const showsData = yield call(
      api.fetchShows,
      action.page,
      action.filter,
    );
    const showsState = yield select(getShows);
    let lastPage = Math.ceil(showsData.total / showsState.itemsPerPage) || 1;
    if (lastPage === 0) lastPage = 1;
    yield put({
      type : showActions.SHOWS_RECEIVED,
      shows : showsData.data,
      total : showsData.total,
      lastPage,
    });
  } catch (e) {
    yield put({ type : showActions.SHOWS_FETCH_FAILED, message : e.message });
  }
}

function* fetchNews() {
  try {
    const newsData = yield call(
      api.fetchNews,
    );
    yield put({
      type : homeActions.NEWS_RECEIVED,
      news : newsData.data,
    });
  } catch (e) {
    yield put({ type : homeActions.NEWS_FETCH_FAILED, message : e.message });
  }
}

function* fetchLastContests() {
  try {
    const contestsData = yield call(
      api.fetchLastContests,
    );
    yield put({
      type : homeActions.LAST_CONTESTS_RECEIVED,
      contests : contestsData.data,
    });
  } catch (e) {
    yield put({ type : homeActions.LAST_CONTESTS_FETCH_FAILED, message : e.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(peopleActions.FETCH_PEOPLE, fetchPeople);
  yield takeLatest(peopleActions.FETCH_PEOPLES, fetchPeoples);
  yield takeLatest(peopleActions.FETCH_RELATED_PEOPLES, fetchRelatedPeoples);
  yield takeLatest(showActions.FETCH_SHOW, fetchShow);
  yield takeLatest(showActions.FETCH_SHOWS, fetchShows);
  yield takeLatest(homeActions.FETCH_NEWS, fetchNews);
  yield takeLatest(homeActions.FETCH_LAST_CONTESTS, fetchLastContests);
}
