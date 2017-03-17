import React, { Component, PropTypes } from 'react';

/**
 * Class for search field component
 */
class SearchField extends Component {

  /** @inheritdoc */
  constructor(props) {
    super(props);
    this.state = {
      value : this.props.value,
    };
    this.initialState = Object.assign({}, this.state);
    this.onChange = this.onChange.bind(this);
  }

  /** @inheritdoc */
  componentWillReceiveProps(nextProps) {
    this.setState({ value : nextProps.value });
  }

  /**
   * onChange handler
   * @param {event} e : onChange event
   * @listens event
   * @returns {void}
   */
  onChange(e) {
    const newValue = e.target.value;
    if (!newValue) {
      this.props.onChange('');
      this.setState({ value : '' });
    }
    this.setState({ value : newValue });
    this.props.onChange(newValue);
  }

  /**
   * trim the input value
   * @returns {string} value
   */
  normalizeInput() {
    return this.state.value.toLowerCase().trim();
  }

  /** @inheritdoc */
  render() {
    return (
      <input
        className = "search-input"
        type = "text"
        maxLength = "50"
        autoComplete = "off"
        value = {this.state.value}
        placeholder = {this.props.placeholder}
        onChange = {this.onChange}
      />
    );
  }
}

SearchField.propTypes = {
  placeholder : PropTypes.string,
  value : PropTypes.string,
  onChange : PropTypes.func.isRequired,
};

SearchField.defaultProps = {
  placeholder : null,
  value : '',
  onChange : null,
};

module.exports = SearchField;
