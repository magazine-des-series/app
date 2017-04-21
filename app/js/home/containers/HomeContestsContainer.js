import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import HomeContests from '../components/contests/HomeContests';

class HomeContestsContainer extends Component {

  componentDidMount() {
    this.props.fetchLastContests();
  }

  render() {
    return <HomeContests />;
  }
}

function mapStateToProps(state) {
  return state.home.contests;
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchLastContests : function fetchLastContests() {
      dispatch(actions.fetchLastContests());
    },
  });
}

HomeContestsContainer.propTypes = {
  fetchLastContests : PropTypes.func,
};

HomeContestsContainer.defaultProps = {
  fetchLastContests : null,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContestsContainer);
