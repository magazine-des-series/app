import React, { Component } from 'react';
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
        );
      }
}

module.exports = App;
