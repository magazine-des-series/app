import 'babel-polyfill';
import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from "./Api";
import * as peopleActions from './peoples/actions/actions';
import {getPeoples} from './selectors';

function *fetchPeople(action) {
   try {
      const people = yield call(Api.fetchPeople, action.payload.peopleId);
      yield put({type: peopleActions.PEOPLE_RECEIVED, people: people});
   } catch (e) {
      yield put({type: peopleActions.PEOPLE_FETCH_FAILED, message: e.message});
   }
}
function *fetchPeoples(action) {
   try {
      const peoplesData = yield call(api, peopleActions.FETCH_PEOPLES, {page:action.page, filter:action.filter});
      let peopleState = yield select(getPeoples);
      let lastPage = Math.ceil(peoplesData.total / peopleState.itemsPerPage) || 1;
      if(lastPage==0) lastPage = 1;
      yield put({type: peopleActions.PEOPLES_RECEIVED, peoples: peoplesData.data, total:peoplesData.total, lastPage:lastPage});
   } catch (e) {
      yield put({type: peopleActions.PEOPLES_FETCH_FAILED, message: e.message});
   }
}

export default function *rootSaga(){
    yield takeLatest(peopleActions.FETCH_PEOPLE,fetchPeople);
    yield takeLatest(peopleActions.FETCH_PEOPLES,fetchPeoples);
}
