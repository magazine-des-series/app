import React, { Component } from 'react';
import HomeNews from './HomeNews';
import HomeContestsContainer from './HomeContestsContainer';

class Home extends Component {

  render() {
    return (
      <div>
        <HomeNews />
        <HomeContestsContainer />
      </div>
    );
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

module.exports = Home;
