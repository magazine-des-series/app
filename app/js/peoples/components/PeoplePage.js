import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PeopleHeader from './PeopleHeader';
import AsideItem from '../../common/components/AsideItem';
import Article from '../../common/components/Article';
import { StringUtils } from '../../utils/tools';

class PeoplePage extends Component {

  static slugPeopleName(people) {
    return StringUtils.slug(`${people.firstName} ${people.lastName}`);
  }
  renderRelatedPeoples() {
    const peoples = this.props.relatedPeoples.map((people) => {
      const slugFullName = StringUtils.slug(`${people.firstName} ${people.lastName}`);
      return (
        <Link to = {`/peoples/${people.id}/${slugFullName}`} key = {`linkTo${people.id}`}>
          <div className = "people-mini">
            <div className = "circle-picture small">
              <img src = {`/img/portraits/${people.picture}`} alt = {`${people.firstName} ${people.lastName}`} />
              <div className = "old-filter" />
            </div>
            <div className = "infoBulle">{`${people.firstName} ${people.lastName}`}</div>
          </div>
        </Link>
      );
    });
    return peoples;
  }

  renderAside() {
    return (
      <div className = "article-aside">
        <AsideItem id = "relatedPeoples" title = "Autres acteurs TV">
          {this.renderRelatedPeoples()}
        </AsideItem>
        <AsideItem id = "podcasts" title = "Derniers podcasts" />
      </div>
    );
  }

  renderArticle(index = 0) {
    const article = this.props.people.articles[index];
    if (this.props.people.articles.length <= index) {
      return <article className = "article-content" />;
    }
    return <Article key = {`article${index}`} article = {article} />;
  }

  renderTabs() {
    const tabs = this.props.people.articles.map((article, i) => {
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
    if (!this.props.people) return <div />;
    return (
      <div id = "people">
        <PeopleHeader
          people = {this.props.people}
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

PeoplePage.propTypes = {
  relatedPeoples : PropTypes.array,
  people : PropTypes.shape({
    id : PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    picture : PropTypes.string,
    jobs : PropTypes.array,
    articles : PropTypes.array,
  }),
  prev : PropTypes.object,
  next : PropTypes.object,
  params : PropTypes.object,
};

PeoplePage.defaultProps = {
  relatedPeoples : [],
  prev : null,
  next : null,
  people : null,
  params : null,
};

module.exports = PeoplePage;
