import React, { Component, PropTypes } from 'react';

class HomeTitle extends Component {
  render() {
    return (
      <div className = "home-title">
        <h2>{this.props.preTitle}</h2>
        <h1>{this.props.title}</h1>
        <div className = "home-title__separator">
          <i className = "i-X" />
          <i className = "i-X" />
          <i className = "i-X" />
        </div>
      </div>
    );
  }
}

HomeTitle.propTypes = {
  preTitle : PropTypes.string,
  title : PropTypes.string,
};

HomeTitle.defaultProps = {
  preTitle : '',
  title : '',
};

module.exports = HomeTitle;
