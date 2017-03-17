import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { StringUtils } from '../../utils/tools';

class ShowItem extends Component {
  render() {
    let tags = '';
    const title = StringUtils.slug(`${this.props.show.title}`);
    for (let i = 0; i < this.props.show.tags.length; i += 1) {
      tags += this.props.show.tags[i];
      if (i < this.props.show.tags.length - 1) tags += ', ';
    }
    return (
      <div className = "show-item">
        <Link to = {`/shows/${this.props.show.id}/${title}`}>
          <div className = "circle-picture">
            <img src = {`/img/shows/${this.props.show.picture}`} alt = {`${this.props.show.title}`} />
            <div className = "old-filter" />
          </div>
          <div className = "tag-label"> {tags} </div>
          <div className = "fullName">
            <div className = "cell">
              <h4>
                {this.props.show.title}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

ShowItem.propTypes = {
  show : PropTypes.object,
};

ShowItem.defaultProps = {
  show : null,
};

module.exports = ShowItem;
