import React, { Component, PropTypes } from 'react';

class FilterSelect extends Component {

  render() {
    return (
      <div className = "filter-select">
        <span className = "filter-label">{this.props.label}</span>
        <span className = "filter-value">{this.props.value}</span>
      </div>
    );
  }
}

FilterSelect.propTypes = {
  label : PropTypes.string,
  value : PropTypes.string,
};

FilterSelect.defaultProps = {
  label : '',
  value : '',
};

module.exports = FilterSelect;
