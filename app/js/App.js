import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ScrollArea from 'react-scrollbar';
import moment from 'moment';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import HomeReducer from './home/reducers/reducer';
import PeoplesReducer from './peoples/reducers/reducer';

import Peoples from './peoples/containers/Peoples';
import Series from './shows/containers/Series';
import Concours from './contests/containers/Concours';
import Podcasts from './podcasts/containers/Podcasts';
import Header from './common/containers/Header';
import Footer from './common/containers/Footer';
import Home from './home/containers/Home';
import People from './peoples/containers/People';
import '../css/main.scss';

// MAIN CONTAINER
const Container = props =>
  <div>
    <Header />
    <ScrollArea
      speed = {0.8}
      className = "main-content"
      contentClassName = "content"
      horizontal = {false}
      vertical
    >
      <div className = "main-container">
        { props.children }
      </div>
      <Footer />
    </ScrollArea>
  </div>;

Container.propTypes = {
  children : PropTypes.node,
};

Container.defaultProps = {
  children : null,
};

// PEOPLE CONTAINER
const PeoplesContainer = props => (
  <div>
    {props.children}
  </div>
);

PeoplesContainer.propTypes = {
  children : PropTypes.node,
};

PeoplesContainer.defaultProps = {
  children : null,
};

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({ HomeReducer, peoples : PeoplesReducer, routing : routerReducer });
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {

  static init() {
    const locale = window.navigator.userLanguage || window.navigator.language;
    moment.locale(locale);
    /*store.subscribe(() =>
      console.log(store.getState()),
    );*/
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
            <Route path = "/series" component = {Series} />
            <Route path = "/peoples" component = {PeoplesContainer} params = {{ page : 1 }}>
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
