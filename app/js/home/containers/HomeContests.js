import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import HomeTitle from '../components/HomeTitle';

class HomeContests extends Component {

  componentDidMount() {
    this.props.fetchLastContests();
  }

  render() {
    return (
      <div id = "home_contests">
        <HomeTitle
          preTitle = "Participez à nos"
          title = "Concours"
        />
      </div>
    )
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

HomeContests.propTypes = {
  fetchLastContests : PropTypes.func,
};

HomeContests.defaultProps = {
  fetchLastContests : null,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContests);
