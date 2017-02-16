import React, { Component } from 'react';
import NewsItem from './NewsItem';

class NewsSlider extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "home-news__slider">
                <NewsItem />
            </div>
        )
    }
}

module.exports = NewsSlider;
