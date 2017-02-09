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
import ScrollArea from 'react-scrollbar';

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
