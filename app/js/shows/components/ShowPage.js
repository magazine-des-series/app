import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ShowHeader from './ShowHeader';
import AsideItem from '../../common/components/AsideItem';
import Article from '../../common/components/Article';
import { StringUtils } from '../../utils/tools';

class ShowPage extends Component {

  static slugShowTitle(show) {
    return StringUtils.slug(`${show.title}`);
  }

  renderAside() {
    return (
      <div className = "article-aside">
        <AsideItem id = "podcasts" title = "Derniers podcasts" />
      </div>
    );
  }

  renderArticle(index = 0) {
    const article = this.props.show.articles[index];
    if (this.props.show.articles.length <= index) {
      return <article className = "article-content" />;
    }
    return <Article key = {`article${index}`} article = {article} />;
  }

  renderTabs() {
    const tabs = this.props.show.articles.map((article, i) => {
      let url = `/peoples/${this.props.params.id}/${this.props.params.fullName}`;
      const current = (
        (!this.props.params.article && i === 0) || (parseInt(this.props.params.article, 10) === i)
      );
      if (i > 0) url += `/${i}`;
      return (
        <Link to = {url} key = {`linkTo${url}`}>
          <div className = {`tab ${current ? 'current' : ''}`}>{article.title}</div>
        </Link>
      );
    });
    if (tabs.length > 1) {
      return (
        <div className = "articles-tabs">
          {tabs}
        </div>
      );
    }
    return '';
  }

  render() {
    if (!this.props.show) return <div />;
    return (
      <div id = "people">
        <ShowHeader
          show = {this.props.show}
          prev = {this.props.prev}
          next = {this.props.next}
        />
        {this.renderTabs()}
        <div className = "article-container">
          {this.renderArticle(this.props.params.article)}
        </div>
        {this.renderAside()}
      </div>
    );
  }
}

ShowPage.propTypes = {
  show : PropTypes.object,
  prev : PropTypes.object,
  next : PropTypes.object,
  params : PropTypes.object,
};

ShowPage.defaultProps = {
  prev : null,
  next : null,
  show : null,
  params : null,
};

module.exports = ShowPage;
