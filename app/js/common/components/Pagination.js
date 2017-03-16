import React, { Component, PropTypes } from 'react';
import PaginationNumber from './PaginationNumber';

/**
 * Pagination component
 */
class Pagination extends Component {

  /** @inheritdoc */
  constructor(props) {
    super(props);
    this.onClickPage = this.onClickPage.bind(this);
  }

  /**
   * onClick page handler
   * @param {int} pageNumber : number of the page clicked
   * @returns {void}
   */
  onClickPage(pageNumber) {
    if (this.props.currentPage === pageNumber) return;
    this.props.onClickPage(pageNumber);
  }

  /**
   * render numbers
   * @return {ReactElement} numbers
   */
  renderNumbers() {
    const pageCount = this.props.pageCount;
    const currentPage = this.props.currentPage;
    const separator = [null];
    let pages = [];
    let start = [];
    let end = [];
    let middle = [];
    let i;
    if (pageCount <= 7) {
      for (i = 1; i <= pageCount; i += 1) {
        pages.push(i);
      }
    } else {
      start = [1, 2, 3];
      end = [pageCount - 2, pageCount - 1, pageCount];
      if (currentPage <= 2 || currentPage >= pageCount - 1) {
        pages = start.concat(separator).concat(end);
      } else if (currentPage === 3) {
        middle = [3, 4];
        start = [1, 2];
        end = [pageCount - 1, pageCount];
        pages = start.concat(middle).concat(separator).concat(end);
      } else if (currentPage === pageCount - 2) {
        middle = [pageCount - 3, pageCount - 2];
        start = [1, 2];
        end = [pageCount - 1, pageCount];
        pages = start.concat(separator).concat(middle).concat(end);
      } else {
        start = [1];
        end = [pageCount];
        middle = [currentPage - 1, currentPage, currentPage + 1];
        pages = start.concat(separator).concat(middle).concat(separator).concat(end);
      }
    }

    return pages.map((number, index) => {
      const key = `${number}${index}`;
      return (
        <PaginationNumber
          key = {key}
          number = {number}
          currentPage = {currentPage}
          onNumberClick = {this.onClickPage}
        />
      );
    });
  }

  /** @inheritdoc */
  render() {
    if (this.props.pageCount === 1) return <div />;
    return (
      <div className = "pagination">
        {this.renderNumbers()}
      </div>
    );
  }
}

Pagination.propTypes = {
  pageCount : PropTypes.number,
  currentPage : PropTypes.number,
  onClickPage : PropTypes.func,
};
const noop = () => {};
Pagination.defaultProps = {
  pageCount : 1,
  currentPage : 1,
  onClickPage : noop,
};
module.exports = Pagination;
