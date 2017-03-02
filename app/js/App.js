import React, { Component } from 'react';
import 'babel-polyfill';
import {Router, Route, IndexRoute, DefaultRoute, Link, browserHistory} from 'react-router';
import Peoples from './peoples/containers/Peoples';
import Series from './shows/containers/Series';
import Concours from './contests/containers/Concours';
import Podcasts from './podcasts/containers/podcasts';
import Header from './common/containers/Header';
import Footer from './common/containers/Footer';
import Home from './home/containers/Home';
import People from "./peoples/containers/People";
import style from '../css/main.scss';
import ScrollArea from 'react-scrollbar';
import moment from 'moment';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import HomeReducer from './home/reducers/reducer';
import PeoplesReducer from './peoples/reducers/reducer';
import { sliderNext, sliderPrev, sliderAutoSwitch, sliderResetSwitchTime } from './home/actions/actionsSlider';
import * as peopleActions from './peoples/actions/actions';

// MAIN CONTAINER
const Container = (props) =>
<div>
    <Header />
    <ScrollArea
      speed={0.8}
      className="main-content"
      contentClassName="content"
      horizontal={false}
      vertical
     >
        <div className="main-container">
            { props.children }
        </div>
        <Footer />
    </ScrollArea>

</div>

//PEOPLES CONTAINER
const PeoplesContainer = (props) => (
  <div>
    {props.children}
  </div>
)

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({HomeReducer, peoples:PeoplesReducer, routing:routerReducer});
let store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
    constructor(props){
        super(props);
        this.init();
    }
    init(){
        var locale = window.navigator.userLanguage || window.navigator.language;
        moment.locale("fr");
    }
      render() {
        return (
            <Provider store={store}>
                <Router history={ history }>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Home} />
                        <Route path="/series" component={Series}/>
                        <Route path="/peoples" component={PeoplesContainer} params = {{page:1}}>
                            <IndexRoute component={Peoples} />
                            <Route path="/peoples(/:id)(/:fullName)" component={People}/>
                        </Route>
                        <Route path="/concours" component={Concours}/>
                        <Route path="/podcasts" component={Podcasts}/>

                    </Route>
               </Router>
           </Provider>
        );
      }
}

module.exports = App;
