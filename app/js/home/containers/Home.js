import React, { Component } from 'react';
import { Link } from 'react-router';
import NewsSlider from '../components/NewsSlider';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

class Home extends Component {
    onClickHandler(){
        if(this.props.onClickHandler) this.props.onClickHandler();
    }
    render(){
        return (
            <div className = "full" id = "home">
                <section id = "home_news">
                    <div className = "home-news__background" />
                    <img className = "home-news__logo" src="/img/logo_big.png" alt="Logo" />
                    <div className = "home-news__content">
                        <h2>Zoom sur</h2>
                        <NewsSlider onClickHandler = {this.onClickHandler.bind(this)} items = {this.props.navigationReducer.items} currentIndex = {this.props.navigationReducer.currentIndex} />
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
function mapStateToProps(state) {
  var sliderState = state.sliderReducer;
  return sliderState;
}

function mapDispatchToProps(dispatch) {
    return({
        onClickHandler:function(){
            dispatch(actions.sliderNext());
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//module.exports = Home;
