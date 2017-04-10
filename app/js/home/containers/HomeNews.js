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
        <HomeNewsSlider items = {this.props.items}/>
      </div>
    );
  }
}

HomeNews.propTypes = {
  items : PropTypes.array,
};

HomeNews.defaultProps = {
  items : [],
};

module.exports = HomeNews;
