import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { StringUtils } from '../../utils/tools';

class PeopleItem extends Component {
  render() {
    let tags = '';
    const fullName = StringUtils.slug(`${this.props.people.firstName} ${this.props.people.lastName}`);
    for (let i = 0; i < this.props.people.jobs.length; i += 1) {
      tags += this.props.people.jobs[i];
      if (i < this.props.people.jobs.length - 1) tags += ', ';
    }
    return (
      <div className = "people-item">
        <Link to = {`/peoples/${this.props.people.id}/${fullName}`}>
          <div className = "circle-picture">
            <img src = {`/img/portraits/${this.props.people.picture}`} alt = {`${this.props.people.firstName} ${this.props.people.lastName}`} />
            <div className = "old-filter" />
          </div>
          <div className = "tag-label"> {tags} </div>
          <div className = "fullName">
            <div className = "cell">
              <h4>
                {this.props.people.firstName}
                <span className = "lastName">{` ${this.props.people.lastName}`}</span>
              </h4>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

PeopleItem.propTypes = {
  people : PropTypes.shape({
    id : PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    picture : PropTypes.string,
    jobs : PropTypes.array,
  }),
};

PeopleItem.defaultProps = {
  people : null,
};

module.exports = PeopleItem;
