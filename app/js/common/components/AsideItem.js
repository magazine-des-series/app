import React, { PropTypes } from 'react';

/**
 * Return an aside Item
 * @param {object} props Component props
 * @param {int} props.id id of the aside part
 * @param {string} props.title Title of the aside part
 * @returns {ReactElement} component
 */
const AsideItem = function AsideItem(props) {
  return (
    <div className = "aside-item" id = {props.id}>
      <div className = "aside-item__title">
        <div className = "ribbon-left" />
        <div className = "ribbon-main">
          <h4>{props.title}</h4>
        </div>
        <div className = "ribbon-right" />
      </div>
      {props.children}
    </div>
  );
};

AsideItem.defaultProps = {
  children : [],
  id : null,
  title : '',
};

AsideItem.propTypes = {
  children : PropTypes.node,
  id : PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  title : PropTypes.string,
};

module.exports = AsideItem;
