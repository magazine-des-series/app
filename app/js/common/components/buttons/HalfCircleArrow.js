import React, { PropTypes, Component } from 'react';
/**
 * Class for half circle arrow component
 */
class HalfCircleArrow extends Component {
/**
 * render of the arrow icon
 * @returns {component} icon
 */
  renderArrow() {
    return <i className = {`arrow i-chevron-${this.props.direction}`} />;
  }

  /** @inheritdoc */
  render() {
    return (
      <div className = {`half-circle-arrow ${this.props.direction}`} >
        <div className = "half">
          <div className = "circle" />
        </div>
        <div className = "content">
          <div className = "table">
            <div className = "cell">{this.props.children}</div>
          </div>
          {this.renderArrow()}
        </div>
      </div>
    );
  }
}

HalfCircleArrow.defaultProps = {
  direction : 'left',
  children : [],
};

HalfCircleArrow.propTypes = {
  direction : PropTypes.string,
  children : PropTypes.node,
};

module.exports = HalfCircleArrow;
