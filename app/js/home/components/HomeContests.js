import React, { Component } from 'react';
import HomeTitle from './HomeTitle';

class HomeContests extends Component {

  render() {
    return (
      <div id = "home_contests">
        <HomeTitle
          preTitle = "Participez à nos"
          title = "Concours"
        />
      </div>
    );
  }
}

module.exports = HomeContests;
