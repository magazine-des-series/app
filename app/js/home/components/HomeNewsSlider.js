import React, { Component } from 'react';
import NewsItem from './NewsItem';

class HomeNewsSlider extends Component {
  renderNews() {
    const items = this.props.items.map(item => (<NewsItem key = {`item${item.id}`} data = {item} />));
    return items;
  }
  render() {
    return (
      <div className = "home-news__slider">
        {this.renderNews()}
      </div>
    );
  }
}

module.exports = HomeNewsSlider;
