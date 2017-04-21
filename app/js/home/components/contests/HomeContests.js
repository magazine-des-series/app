import React, { Component } from 'react';
import Slider from 'react-slick';
import HomeTitle from '../HomeTitle';


class HomeContests extends Component {

  render() {
    const settings = {
      dots : true,
      infinite : false,
      speed : 500,
      slidesToShow : 4,
      slidesToScroll : 1,
      className : 'contestSlider',
    };
    return (
      <div id = "home_contests">
        <HomeTitle
          preTitle = "Participez à nos"
          title = "Concours"
        />
        <Slider {...settings}>
          <div><h1>Coucou</h1></div>
          <div>Beuh !</div>
        </Slider>
      </div>
    );
  }
}

module.exports = HomeContests;
