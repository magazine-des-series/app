import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import moment from 'moment';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import HomeReducer from './home/reducers/reducer';
import PeoplesReducer from './peoples/reducers/reducer';
import ShowsReducer from './shows/reducers/reducer';

import Peoples from './peoples/containers/Peoples';
import People from './peoples/containers/People';
import Shows from './shows/containers/Shows';
import Show from './shows/containers/Show';
import Concours from './contests/containers/Concours';
import Podcasts from './podcasts/containers/Podcasts';
import Header from './common/containers/Header';
import Footer from './common/containers/Footer';
import Home from './home/containers/Home';

import '../css/main.scss';

// MAIN CONTAINER
const Container = props =>
  <div className = "main-content">
    <Header />
    <div className = "main-container">
      { props.children }
    </div>
    <Footer />
  </div>;

Container.propTypes = {
  children : PropTypes.node,
};

Container.defaultProps = {
  children : null,
};

// SIMPLE CONTAINER
const SimpleContainer = props => (
  <div>
    {props.children}
  </div>
);

SimpleContainer.propTypes = {
  children : PropTypes.node,
};

SimpleContainer.defaultProps = {
  children : null,
};

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
    /* store.subscribe(() =>
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
          <Route path = "/" component = {Container}>
            <IndexRoute component = {Home} />
            <Route path = "/shows" params = {{ page : 1 }}>
              <IndexRoute component = {Shows} />
              <Route path = "/shows(/:id)(/:title)(/:article)(/:articleTitle)" component = {Show} />
            </Route>
            <Route path = "/peoples" component = {SimpleContainer} params = {{ page : 1 }}>
              <IndexRoute component = {Peoples} />
              <Route path = "/peoples(/:id)(/:fullName)(/:article)(/:articleTitle)" component = {People} />
            </Route>
            <Route path = "/concours" component = {Concours} />
            <Route path = "/podcasts" component = {Podcasts} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

module.exports = App;
