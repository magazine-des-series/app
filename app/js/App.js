import React, { Component } from 'react';
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import moment from 'moment';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import HomeReducer from './home/reducers/reducer';
import PeoplesReducer from './peoples/reducers/reducer';
import ShowsReducer from './shows/reducers/reducer';

import MainContainer from './common/containers/MainContainer';
import Peoples from './peoples/containers/Peoples';
import People from './peoples/containers/People';
import Shows from './shows/containers/Shows';
import Show from './shows/containers/Show';
import Contests from './contests/containers/Contests';
import Contest from './contests/containers/Contest';
import Podcasts from './podcasts/containers/Podcasts';
import Home from './home/containers/Home';

import UsersListContainer from './peoples/containers/UsersListContainer';


import '../css/main.scss';


const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  home : HomeReducer,
  peoples : PeoplesReducer,
  shows : ShowsReducer,
  routing : routerReducer,
});
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {

  static init() {
    const locale = window.navigator.userLanguage || window.navigator.language;
    moment.locale(locale);
  /*  store.subscribe(() =>
      console.log(store.getState()),
    ); */
  }

  constructor(props) {
    super(props);
    App.init();
  }

  render() {
    return (
      <Provider store = {store}>
        <Router history = {history}>
          <Route path = "/" component = {MainContainer}>
            <IndexRoute component = {Home} />
            <Route path = "/shows" params = {{ page : 1 }}>
              <IndexRoute component = {Shows} />
              <Route path = "/shows(/:id)(/:title)(/:article)(/:articleTitle)" component = {Show} />
            </Route>
            <Route path = "/peoples" params = {{ page : 1 }}>
              <IndexRoute component = {Peoples} />
              <Route path = "/peoples(/:id)(/:fullName)(/:article)(/:articleTitle)" component = {People} />
            </Route>
            <Route path = "/contests" params = {{ page : 1 }}>
              <IndexRoute component = {Contests} />
              <Route path = "/contests(/:id)(/:title)" component = {Contest} />
            </Route>
            <Route path = "/podcasts" component = {Podcasts} />
            <Route path = "/tuto" component = {UsersListContainer} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

module.exports = App;
