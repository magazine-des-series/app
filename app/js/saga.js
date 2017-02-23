import 'babel-polyfill';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from "./Api";
import * as peopleActions from './peoples/actions/actions';

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
      const peoples = yield call(api, peopleActions.FETCH_PEOPLES, {page:action.page});
      yield put({type: peopleActions.PEOPLES_RECEIVED, peoples: peoples});
   } catch (e) {
      yield put({type: peopleActions.PEOPLES_FETCH_FAILED, message: e.message});
   }
}

export default function *rootSaga(){
    yield takeLatest(peopleActions.FETCH_PEOPLE,fetchPeople);
    yield takeLatest(peopleActions.FETCH_PEOPLES,fetchPeoples);
}
