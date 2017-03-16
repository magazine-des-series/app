import React, { PropTypes, Component } from 'react';
import { TweenMax } from 'gsap';

/**
 * Article component
 */
class Article extends Component {

  /**
   * escape a html data
   * @param {string} escapedHTML : string to convert
   * @returns {string} value
   */
  static unescapeHTML(escapedHTML) {
    return escapedHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  }

  /** @inheritdoc */
  componentWillEnter(callback) {
    const el = this.container;
    TweenMax.set(el, { position : 'absolute', opacity : 0 });
    TweenMax.set(el, { clearProps : 'all', delay : 0.5 });
    TweenMax.fromTo(el, 0.5, { opacity : 0 }, { opacity : 1, onComplete : callback, delay : 0.5 });
  }

  /** @inheritdoc */
  componentWillLeave(callback) {
    const el = this.container;
    TweenMax.to(el, 0.5, { opacity : 0, onComplete : callback });
  }

  /** @inheritdoc */
  render() {
    return (
      <div className = "article-content" ref = {c => (this.container = c)}>
        <article ref = {c => (this.content = c)}>
          <div className = "article-content__title">
            <h1>{this.props.article.title}</h1>
            <p className = "meta">
              <i className = "i-calendar" />
              <time dateTime = "2010-07-03" itemProp = "dateCreated">{this.props.article.dateCreated}</time>
              <span>{' // '}</span>
              <span itemProp = "author">{this.props.article.author}</span>
            </p>
          </div>
          <div className = "article-content__content" dangerouslySetInnerHTML = {{ __html : Article.unescapeHTML(this.props.article.text) }} />
        </article>
      </div>
    );
  }
}

Article.propTypes = {
  article : PropTypes.shape({
    text : PropTypes.string,
    dateCreated : PropTypes.string,
    author : PropTypes.string,
    title : PropTypes.string,
  }),
};

Article.defaultProps = {
  article : null,
};

module.exports = Article;
