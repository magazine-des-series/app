import React, { Component, PropTypes } from 'react';
import TweenMax from 'gsap';

/**
 * Footer component
 */
class ModalContainer extends Component {

  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.show();
  }

  componentWillUnmount() {
    TweenMax.killTweensOf(this.container);
    TweenMax.killTweensOf(this.content);
  }

  show() {
    TweenMax.fromTo(this.container, 0.2, { opacity : 0 }, { opacity : 1 });
    TweenMax.fromTo(this.content, 0.5, { opacity : 0, scale : 0 }, { delay : 0.2, opacity : 1, scale : 1,  ease : Back.easeOut });
  }

  hide() {
    TweenMax.killTweensOf(this.container);
    TweenMax.killTweensOf(this.content);
    TweenMax.to(this.container, 0.2, { opacity : 0, delay : 0.2, onComplete : this.props.onClose });
    TweenMax.to(this.content, 0.2, { scale : 0,  ease : Circ.easeOut });
  }

  /** @inheritdoc */
  render() {
    return (
      <div className = "modal-container" ref = {c => (this.container = c)}>
        <div className = "table">
          <div className = "cell">
            <div className = {`modal-content ${this.props.contentClass}`} ref = {c => (this.content = c)}>
              {this.props.closeButton ? <button className = "button-close" onClick = {this.hide}><i className = "i-X" /></button> : '' }
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalContainer.propTypes = {
  children : PropTypes.node,
  closeButton : PropTypes.bool,
  contentClass : PropTypes.string,
  onClose : PropTypes.func,
};

ModalContainer.defaultProps = {
  children : null,
  closeButton : true,
  contentClass : '',
  onClose : null,
};


module.exports = ModalContainer;
