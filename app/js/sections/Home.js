import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render(){
        return (
            <div className = "full" id = "home">
                <section id = "home_news">
                    <div className = "home-news__background" />
                    <img className = "home-news__logo" src="../../img/logo_big.png" alt="Logo" />
                    <div className = "home-news__content">
                        <h3>Zoom sur</h3>
                    </div>
                </section>
                <h1>{"HOME"}</h1>
                <h2><Link to="/peoples">Link to peoples</Link></h2>
            </div>
        )
    }
}

module.exports = Home;
