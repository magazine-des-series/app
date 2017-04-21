import React, { Component, PropTypes } from 'react';
import LinkButton from '../../../common/components/buttons/LinkButton';

class HomeContestItem extends Component {

  render() {
    return (
      <div className = "home-contests__item">
        <h3>{this.props.item.name}</h3>
        <p className = "meta">
          <i className = "i-calendar" />
          <time dateTime = {this.props.item.startDate} itemProp = "startDate">{this.props.item.startDate}</time>
          <span> - </span>
          <time dateTime = {this.props.item.endDate} itemProp = "endDate">{this.props.item.endDate}</time>
        </p>
        <p itemProp = "description">{this.props.item.description}</p>
        <LinkButton
          align = "right"
          label = "Lire la suite"
          link = ""
        />
      </div>
    );
  }
}

HomeContestItem.propTypes = {
  item : PropTypes.object,
};

HomeContestItem.defaultProps = {
  item : null,
};

module.exports = HomeContestItem;
