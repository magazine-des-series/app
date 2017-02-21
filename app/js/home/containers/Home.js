import React, { Component } from 'react';
import { Link } from 'react-router';
import NewsSlider from '../components/NewsSlider';

class Home extends Component {
    render(){
        return (
            <div className = "full" id = "home">
                <section id = "home_news">
                    <div className = "home-news__background" />
                    <img className = "home-news__logo" src="../../img/logo_big.png" alt="Logo" />
                    <div className = "home-news__content">
                        <h2>Zoom sur</h2>
                        <NewsSlider />
                            <div className = "home-news__button">
                                    <div className="ribbon-left" />
                                    <div className="ribbon-main">
                                        <Link to='/series'>{"Voir tous les dossiers"}</Link>
                                    </div>
                                    <div className="ribbon-right" />
                            </div>


                    </div>
                </section>
                <h1>{"HOME"}</h1>
                <h2><Link to="/peoples">Link to peoples</Link></h2>
            </div>
        )
    }
}

module.exports = Home;
