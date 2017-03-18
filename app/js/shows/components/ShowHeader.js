import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { StringUtils } from '../../utils/tools';
import HalfCircleArrow from '../../common/components/buttons/HalfCircleArrow';

class ShowHeader extends Component {

  renderPrevArrow() {
    if (!this.props.prev) return '';
    const title = StringUtils.slug(`${this.props.prev.title}`);
    return (
      <Link key = {`prev${this.props.prev.id}`} to = {`/shows/${this.props.prev.id}/${title}`}>
        <HalfCircleArrow direction = "left">
          <div className = "text">
            <div className = "subTitle">Série précédente</div>
            <div className = "title" >{`${this.props.prev.title}`}</div>
          </div>
          <div className = "circle-picture tiny">
            <img src = {`/img/shows/${this.props.prev.picture}`} alt = {`${this.props.prev.title}`} />
            <div className = "old-filter" />
          </div>
        </HalfCircleArrow>
      </Link>
    );
  }

  renderNextArrow() {
    if (!this.props.next) return '';
    const title = StringUtils.slug(`${this.props.next.title}`);
    return (
      <Link key = {`next${this.props.next.id}`} to = {`/shows/${this.props.next.id}/${title}`}>
        <HalfCircleArrow direction = "right">
          <div className = "circle-picture tiny">
            <img src = {`/img/shows/${this.props.next.picture}`} alt = {`${this.props.next.title}`} />
            <div className = "old-filter" />
          </div>
          <div className = "text">
            <div className = "subTitle" >Série suivante</div>
            <div className = "title" >{`${this.props.next.title}`}</div>
          </div>
        </HalfCircleArrow>
      </Link>
    );
  }
  /** @inheritdoc */
  render() {
    if (!this.props.show) return <div />;
    const title = `${this.props.show.title}`;
    const tagItems = this.props.show.tags.map(tag => (
      <div key = {`tag${tag}`} className = "tag-label">{tag}</div>
    ));
    return (
      <div className = "header-content">
        <ul className = "breadcrumb">
          <li><Link to = "/">Accueil</Link></li>
          <li><Link to = "/shows">Séries</Link></li>
          <li className = "current">{title}</li>
        </ul>
        <div className = "header-content__content">
          {this.renderPrevArrow()}
          <figure>
            <div className = "landscape-picture big">
              <img src = {`/img/shows/${this.props.show.picture}`} alt = {`${title}`} />
              <div className = "old-filter" />
            </div>
          </figure>
          <article>
            <h1>{title}</h1>
            <h5><div dangerouslySetInnerHTML = {{ __html : this.props.show.summary }} /></h5>
            <div className = "show__tags">{tagItems}</div>
          </article>
          {this.renderNextArrow()}
        </div>
      </div>
    );
  }
}

ShowHeader.propTypes = {
  show : PropTypes.object,
  prev : PropTypes.object,
  next : PropTypes.object,
};

ShowHeader.defaultProps = {
  show : null,
  prev : null,
  next : null,
};

module.exports = ShowHeader;
