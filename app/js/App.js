import React, { Component } from 'react';
import 'babel-polyfill';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
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

import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import HomeReducer from './home/reducers/reducer';
import PeopleReducer from './peoples/reducers/reducer';
import { sliderNext, sliderPrev, sliderAutoSwitch, sliderResetSwitchTime } from './home/actions/actionsSlider';
import * as peopleActions from './peoples/actions/actions';

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
    </ScrollArea>
    <Footer />
</div>
let datas = [
    {
        name:"L'île fantastique",
        image:"https://placeholdit.imgix.net/~text?txtsize=33&txt=480%C3%97270&w=480&h=270",
        dateCreated:"3 juillet 2010",
        author:"Thierry le Peut, Christophe Dordain",
        description:"Mr Roarke est un milliardaire excentrique, propriétaire d'une île au coeur de l'océan Pacifique afin d'y accueillir les touristes et de réaliser leur désir le plus cher. Si la plupart du temps, il s'agit de trouver l'Amour, ces fantasmes sont toutefois variés : problèmes familiaux, d'identité, mal-être, ou encore trouver un certain équilibre, sont des thèmes abordés. ",
        id:1
    },
    {
        name:"L'île fantastique 2",
        image:"https://placeholdit.imgix.net/~text?txtsize=33&txt=480%C3%97270&w=480&h=270",
        dateCreated:"3 juillet 2010",
        author:"Thierry le Peut, Christophe Dordain",
        description:"Mr Roarke est un milliardaire excentrique, propriétaire d'une île au coeur de l'océan Pacifique afin d'y accueillir les touristes et de réaliser leur désir le plus cher. Si la plupart du temps, il s'agit de trouver l'Amour, ces fantasmes sont toutefois variés : problèmes familiaux, d'identité, mal-être, ou encore trouver un certain équilibre, sont des thèmes abordés. ",
        id:2
    }
];
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({HomeReducer, PeopleReducer});
let store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(peopleActions.fetchPeoples());

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
                <Router history={ browserHistory }>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Home} />
                        <Route path="/series" component={Series}/>
                        <Route path="/peoples" component={Peoples}>
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
