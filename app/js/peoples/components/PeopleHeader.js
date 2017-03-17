import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { StringUtils } from '../../utils/tools';
import HalfCircleArrow from '../../common/components/buttons/HalfCircleArrow';

class PeopleHeader extends Component {

  renderDates() {
    if (!this.props.people.birthDate) return '';
    if (this.props.people.deathDate) {
      const birthDate = moment(new Date(this.props.people.birthDate)).format('YYYY');
      const deathDate = moment(new Date(this.props.people.deathDate)).format('YYYY');
      return <span>{`${birthDate} - ${deathDate}`}</span>;
    }
    const birthDate = moment(new Date(this.props.people.birthDate)).format('LL');
    const age = moment(new Date(this.props.people.birthDate)).fromNow(true);
    return <span>{`${birthDate} (${age})|`}</span>;
  }

  renderPrevArrow() {
    if (!this.props.prev) return '';
    const fullName = StringUtils.slug(`${this.props.prev.firstName} ${this.props.prev.lastName}`);
    return (
      <Link key = {`prev${this.props.prev.id}`} to = {`/peoples/${this.props.prev.id}/${fullName}`}>
        <HalfCircleArrow direction = "left">
          <div className = "text">
            <div className = "subTitle">Portrait précédent</div>
            <div className = "title" >{`${this.props.prev.firstName} ${this.props.prev.lastName}`}</div>
          </div>
          <div className = "circle-picture tiny">
            <img src = {`/img/portraits/${this.props.prev.picture}`} alt = {`${this.props.prev.firstName} ${this.props.prev.lastName}`} />
            <div className = "old-filter" />
          </div>
        </HalfCircleArrow>
      </Link>
    );
  }

  renderNextArrow() {
    if (!this.props.next) return '';
    const fullName = StringUtils.slug(`${this.props.next.firstName} ${this.props.next.lastName}`);
    return (
      <Link key = {`next${this.props.next.id}`} to = {`/peoples/${this.props.next.id}/${fullName}`}>
        <HalfCircleArrow direction = "right">
          <div className = "circle-picture tiny">
            <img src = {`/img/portraits/${this.props.next.picture}`} alt = {`${this.props.next.firstName} ${this.props.next.lastName}`} />
            <div className = "old-filter" />
          </div>
          <div className = "text">
            <div className = "subTitle" >Portrait suivant</div>
            <div className = "title" >{`${this.props.next.firstName} ${this.props.next.lastName}`}</div>
          </div>
        </HalfCircleArrow>
      </Link>
    );
  }
  /** @inheritdoc */
  render() {
    if (!this.props.people) return <div />;
    const fullName = `${this.props.people.firstName} ${this.props.people.lastName}`;
    const tagItems = this.props.people.tags.map(tag => (
      <div key = {`tag${tag}`} className = "tag-label">{tag}</div>
    ));
    return (
      <div className = "header-content">
        <ul className = "breadcrumb">
          <li><Link to = "/">Accueil</Link></li>
          <li><Link to = "/peoples">Portraits</Link></li>
          <li className = "current">{fullName}</li>
        </ul>
        <div className = "header-content__content">
          {this.renderPrevArrow()}
          <figure>
            <div className = "circle-picture big">
              <img src = {`/img/portraits/${this.props.people.picture}`} alt = {`${fullName}`} />
              <div className = "old-filter" />
            </div>
            <figcaption>{this.renderDates()}</figcaption>
          </figure>
          <article>
            <h1>{fullName}</h1>
            <h5><div dangerouslySetInnerHTML = {{ __html : this.props.people.summary }} /></h5>
            <div className = "people__tags">{tagItems}</div>
          </article>
          {this.renderNextArrow()}
        </div>
      </div>
    );
  }
}

PeopleHeader.propTypes = {
  people : PropTypes.shape({
    tags : PropTypes.array,
    birthDate : PropTypes.string,
    deathDate : PropTypes.string,
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    picture : PropTypes.string,
    summary : PropTypes.string,
  }),
  prev : PropTypes.shape({
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    picture : PropTypes.string,
    id : PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  }),
  next : PropTypes.shape({
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    picture : PropTypes.string,
    id : PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  }),
};

PeopleHeader.defaultProps = {
  people : null,
  prev : null,
  next : null,
};

module.exports = PeopleHeader;
