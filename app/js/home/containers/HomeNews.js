import React, { Component, PropTypes } from 'react';
import HomeLogo from '../components/HomeLogo';
import HomeNewsBackground from '../components/HomeNewsBackground';
import HomeNewsSlider from '../components/HomeNewsSlider';

class HomeNews extends Component {
  render() {
    return (
      <div id = "home_news">
        <HomeNewsBackground />
        <HomeLogo />
        <HomeNewsSlider items = {this.props.data.items} />
      </div>
    );
  }
}

HomeNews.propTypes = {
  data : PropTypes.object,
};

HomeNews.defaultProps = {
  data : {
    items : null,
  },
};

module.exports = HomeNews;
