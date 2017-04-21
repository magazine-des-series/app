import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeLogo from '../components/HomeLogo';
import HomeNewsBackground from '../components/HomeNewsBackground';
import HomeNewsSlider from '../components/HomeNewsSlider';
import * as actions from '../actions/actions';

class HomeNews extends Component {

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div id = "home_news">
        <HomeNewsBackground />
        <HomeLogo />
        <HomeNewsSlider items = {this.props.items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.home.news;
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchNews : function fetchNews() {
      dispatch(actions.fetchNews());
    },
  });
}

HomeNews.propTypes = {
  fetchNews : PropTypes.func,
  items : PropTypes.array,
};

HomeNews.defaultProps = {
  fetchNews : null,
  items : [],
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeNews);
