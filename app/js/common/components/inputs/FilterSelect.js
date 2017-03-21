import React, { Component, PropTypes } from 'react';

class FilterSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open : false,
    };
  }

  getDisplayedValue() {
    if (!this.props.current) return this.props.default;
    let i;
    for (i = 0; i < this.props.values; i += 1) {
      if (this.props.values[i].value === this.props.current) return this.props.values[i].label;
    }
    return this.props.default;
  }

  renderArrow() {
  //  if (this.props.values.length > 0) return '';
    return (
      <i className = {`i-chevron-${this.state.open ? 'up' : 'down'}`} />
    );
  }

  renderList() {
    const list = this.props.values.map(listItem => <div>{listItem.label}</div>);
    return <div className = "filter-list">{list}</div>;
  }

  render() {
    return (
      <div className = "filter-select" ref = {node => (this.node = node)}>
        <span className = "filter-label">{this.props.label}</span>
        <span className = "filter-value">{this.getDisplayedValue()}</span>
        {this.renderArrow()}
        {this.renderList()}
      </div>
    );
  }
}

FilterSelect.propTypes = {
  label : PropTypes.string,
  current : PropTypes.string,
  default : PropTypes.string,
  values : PropTypes.array,
};

FilterSelect.defaultProps = {
  label : '',
  current : '',
  default : '',
  values : [],
};

module.exports = FilterSelect;
