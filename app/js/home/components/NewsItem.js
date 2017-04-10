import React, { Component, PropTypes } from 'react';
import { TweenMax } from 'gsap';

class NewsItem extends Component {
  componentWillEnter(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, { x : '100%', opacity : 1 }, { x : '0%', opacity : 1, onComplete : callback });
  }
  componentWillLeave(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, { x : 0, opacity : 1 }, { x : '-100%', opacity : 1, onComplete : callback });
  }
  render() {
    return (
      <article className = "home-news__item" itemScope itemType = "http://schema.org/Article" ref = {c => (this.container = c)}>
        <img alt = {this.props.data.name} itemProp = "image" src = {`/img/${this.props.data.image}`} />
        <h3 itemProp = "name">{this.props.data.name}</h3>
        <p className = "meta">
          <i className = "i-calendar" />
          <time dateTime = "2010-07-03" itemProp = "dateCreated">{this.props.data.dateCreated}</time>
          <span>{' // '}</span>
          <span itemProp = "author">{this.props.data.author}</span>
        </p>
        <p itemProp = "description">{this.props.data.description}</p>
        <div className = "readMore"><i className = "i-play" />Lire le dossier</div>
      </article>
    );
  }
}

NewsItem.propTypes = {
  data : PropTypes.object,
};

NewsItem.defaultProps = {
  data : null,
};

module.exports = NewsItem;
