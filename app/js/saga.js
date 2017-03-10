import 'babel-polyfill';
import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import api from "./Api";
import * as peopleActions from './peoples/actions/actions';
import {getPeoples} from './selectors';

function *fetchPeople(action) {
   try {
      const id = action.peopleId;
      const peopleData = yield call(api, peopleActions.FETCH_PEOPLE, {id:action.peopleId});
      yield put({type: peopleActions.PEOPLE_RECEIVED, people: peopleData.data});
      if(!peopleData.data) return;

      let fullName = peopleData.data.lastName+peopleData.data.firstName;
      //fetch next people
         try{
              const nextPeopleData = yield call(api, peopleActions.FETCH_NEXT_PEOPLE, {id:id, fullName:fullName});
              let next = null;
              if(nextPeopleData.data && nextPeopleData.data.length>0) next = nextPeopleData.data[0];
              yield put({type: peopleActions.NEXT_PEOPLE_RECEIVED, people: next});
          } catch (e) {
              yield put({type: peopleActions.NEXT_PEOPLE_FAILED, message: e.message});
          }
          try{
              const prevPeopleData = yield call(api, peopleActions.FETCH_PREV_PEOPLE, {id:id, fullName:fullName});
              let prev = null;
              if(prevPeopleData.data && prevPeopleData.data.length>0) prev = prevPeopleData.data[0];
              yield put({type: peopleActions.PREV_PEOPLE_RECEIVED, people: prev});
          } catch (e) {
              yield put({type: peopleActions.PREV_PEOPLE_FAILED, message: e.message});
          }
   } catch (e) {
      yield put({type: peopleActions.PEOPLE_FETCH_FAILED, message: e.message});
   }
}

function *fetchNextPeople(action) {
   try {
      const peopleData = yield call(api, peopleActions.FETCH_NEXT_PEOPLE, {id:action.id, fullName:action.fullName});
      yield put({type: peopleActions.NEXT_PEOPLE_RECEIVED, people: peopleData.data});
   } catch (e) {
      yield put({type: peopleActions.NEXT_PEOPLE_FAILED, message: e.message});
   }
}

function *fetchPrevPeople(action) {
   try {
      const peopleData = yield call(api, peopleActions.FETCH_PREV_PEOPLE, {id:action.id, fullName:action.fullName});
      yield put({type: peopleActions.PREV_PEOPLE_RECEIVED, people: peopleData.data});
   } catch (e) {
      yield put({type: peopleActions.PREV_PEOPLE_FAILED, message: e.message});
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

function *fetchRelatedPeoples(action) {
   try {
      const peoplesData = yield call(api, peopleActions.FETCH_RELATED_PEOPLES, {id:action.currentId});
      yield put({type: peopleActions.RELATED_PEOPLES_RECEIVED, peoples: peoplesData.data});
   } catch (e) {
      yield put({type: peopleActions.PEOPLES_FETCH_FAILED, message: e.message});
   }
}

export default function *rootSaga(){
    yield takeLatest(peopleActions.FETCH_PEOPLE,fetchPeople);
    yield takeLatest(peopleActions.FETCH_PEOPLES,fetchPeoples);
    yield takeLatest(peopleActions.FETCH_RELATED_PEOPLES,fetchRelatedPeoples);
}
