import React, { Component } from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Peoples from './sections/Peoples';
import Series from './sections/Series';
import Concours from './sections/Concours';
import Podcasts from './sections/Podcasts';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './sections/Home';
import People from "./sections/People";
import style from '../css/main.scss';

const Container = (props) => <div>
  <Header />
  <div className="main-content">
      {props.children}
  </div>
  <Footer />
</div>

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
            <Route path="/" component={Container}>
                <IndexRoute component={Home} />
                <Route path="/series" component={Series}/>
                <Route path="/peoples" component={Peoples}/>
                <Route path="/concours" component={Concours}/>
                <Route path="/podcasts" component={Podcasts}/>
                <Route path="/peoples(/:id)(/:type)" component={People}/>
            </Route>
       </Router>
    );
  }
}

module.exports = App;
