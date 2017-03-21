import React, { PropTypes, Component } from 'react';

class FilterButton extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onClick() {
    if (this.props.onClick) this.props.onClick(this.props.label);
  }

  onDelete() {
    if (this.props.onDelete) this.props.onDelete(this.props.label);
  }

  renderDeleteButton() {
    if (this.props.canDelete) return <button className = "button-delete" onClick = {this.onDelete}><i className = "i-X" /></button>;
    return '';
  }

  render() {
    return (
      <button className = {`filter-tag ${this.props.className}`} onClick = {this.onClick}>
        {this.props.label}
      </button>
    );
  }
}

FilterButton.defaultProps = {
  canDelete : false,
  label : '',
  className : '',
  onDelete : null,
  onClick : null,
};

FilterButton.propTypes = {
  canDelete : PropTypes.bool,
  label : PropTypes.string,
  className : PropTypes.string,
  onDelete : PropTypes.func,
  onClick : PropTypes.func,
};

module.exports = FilterButton;
