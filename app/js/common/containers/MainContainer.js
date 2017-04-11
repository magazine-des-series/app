import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

const MainContainer = props =>
  <div className = "main-content">
    <Header />
    <div className = "main-container">
      { props.children }
    </div>
    <Footer />
  </div>;

MainContainer.propTypes = {
  children : PropTypes.node,
};

MainContainer.defaultProps = {
  children : null,
};

export default MainContainer;
