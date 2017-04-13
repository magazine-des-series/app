import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import HomeNews from './HomeNews';
import HomeContests from './HomeContests';

class Home extends Component {

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div>
        <HomeNews data = {this.props.news} />
        <HomeContests />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.home;
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchNews : function fetchNews() {
      dispatch(actions.fetchNews());
    },
  });
}

Home.propTypes = {
  fetchNews : PropTypes.func,
  news : PropTypes.object,
};

Home.defaultProps = {
  fetchNews : null,
  news : null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
