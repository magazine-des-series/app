import React, { Component, PropTypes } from 'react';
import NewsItem from './NewsItem';

class HomeNewsSlider extends Component {
  renderNews() {
    const items = this.props.items.map(item => (<NewsItem key = {`item${item.id}`} data = {item} />));
    return items;
  }
  render() {
    return (
      <div className = "home-news__slider">
        <h2>Zoom sur</h2>
        {this.renderNews()}
        <div className = "home-news__button">
          <div className = "ribbon-left" />
          <div className = "ribbon-main">
            <a>Voir tous les dossiers</a>
          </div>
          <div className = "ribbon-right" />
        </div>
      </div>
    );
  }
}

HomeNewsSlider.propTypes = {
  items : PropTypes.array,
};

HomeNewsSlider.defaultProps = {
  items : [],
};


module.exports = HomeNewsSlider;
