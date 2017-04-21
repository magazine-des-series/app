import React, { Component, PropTypes } from 'react';
import TweenMax from 'gsap';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this);
    this.state = {
      anim : false,
    };
    this.callbackAnimation = this.callbackAnimation.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.filter !== this.props.filter && !this.state.anim) {
      TweenMax.to(this.content, 1, { opacity : 0, onComplete : this.callbackAnimation });
      this.state.anim = true;
      return false;
    }
    if (this.state.anim === true && !nextState.anim) TweenMax.to(this.content, 1, { opacity : 1 });
    return true;
  }

  /*componentDidUpdate() {
    TweenMax.to(this.content, 1, {opacity : 0});
    TweenMax.to(this.content, 1, {opacity : 1, delay:1});
  }*/

  onFilter(filter) {
    if (this.props.onFilter) this.props.onFilter(filter);
  }

  callbackAnimation() {
    this.setState({ anim : false });
  }

  render() {
    const items = this.props.users.map(user => <h3 className = {user.resigning ? 'resigning' : ''}>{user.name}</h3>);
    return (
      <div id = "tuto">
        <button className = {(this.props.filter === 0) ? 'active' : ''} onClick = {() => this.onFilter(0)}>Tout voir</button>
        <button className = {(this.props.filter === 2) ? 'active' : ''} onClick = {() => this.onFilter(2)}>Cacher les démissionnaires</button>
        <button className = {(this.props.filter === 1) ? 'active' : ''} onClick = {() => this.onFilter(1)}>Cacher les résistants</button>
        <div ref = {c => (this.content = c)}>
          {items}
        </div>
        {this.props.children}
      </div>
    );
  }
}

UsersList.propTypes = {
  users : PropTypes.array,
  onFilter : PropTypes.func,
  filter : PropTypes.number,
};

UsersList.defaultProps = {
  users : [],
  onFilter : null,
  filter : 0,
};

module.exports = UsersList;
