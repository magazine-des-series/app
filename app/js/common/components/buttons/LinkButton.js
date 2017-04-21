import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class LinkButton extends Component {
  render() {
    return (
      <Link to = {this.props.link}>
        <button className = {`${this.props.className} ${this.props.align}`}>
          {this.props.icon ? <i className = {this.props.icon} /> : ''}
          <span>{this.props.label}</span>
        </button>
      </Link>
    );
  }
}

LinkButton.propTypes = {
  className : PropTypes.string,
  label : PropTypes.string,
  icon : PropTypes.string,
  align : PropTypes.string,
  link : PropTypes.string,
};

LinkButton.defaultProps = {
  className : 'simpleButton',
  label : '',
  icon : null,
  align : 'center',
  link : '/',
};

module.exports = LinkButton;
