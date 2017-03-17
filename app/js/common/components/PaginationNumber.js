import React, { Component, PropTypes } from 'react';

/**
 * Pagination number component
 */
class PaginationNumber extends Component {

  /** @inheritdoc */
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  /**
   * onClick number handler
   * @returns {void}
   */
  onClickHandler() {
    this.props.onNumberClick(this.props.number);
  }

  /** @inheritdoc */
  render() {
    if (!this.props.number) {
      return <button className = "empty">{'...'}</button>;
    }
    return (
      <button className = {this.props.number === this.props.currentPage ? 'current' : ''} onClick = {this.onClickHandler} >
        {this.props.number}
      </button>
    );
  }
}

PaginationNumber.propTypes = {
  currentPage : PropTypes.number.isRequired,
  number : PropTypes.number,
  onNumberClick : PropTypes.func.isRequired,
};

const noop = () => {};
PaginationNumber.defaultProps = {
  currentPage : 1,
  number : 1,
  onNumberClick : noop,
};

module.exports = PaginationNumber;
