import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SearchField from '../../common/components/inputs/SearchField';
import PeopleItem from './PeopleItem';

class PeoplesGallery extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    if (this.props.onSearch) this.props.onSearch(value);
  }

  render() {
    const itemsData = this.props.data;
    const items = itemsData.map(people => (<PeopleItem key = {`people${people.id}`} people = {people} />));
    return (
      <div id = "peoples">
        <div className = "header-content">
          <ul className = "breadcrumb">
            <li><Link to = "/">Accueil</Link></li>
            <li className = "current">Portraits</li>
          </ul>
          <h1>Peoples</h1>
          <h5>
            Acteurs, scénaristes ou producteurs,
            ils ont tous bâti à leur façon l’univers des séries d’hier et d’aujourd’hui...
            <br />
            Retrouvez ici les plus grands noms du petit écran !
          </h5>
          <div className = "header-content__search-bar">
            <i className = "i-search" />
            <SearchField value = {this.props.searchText} placeholder = "Rechercher une personnalité" onChange = {this.onSearch} />
          </div>
        </div>
        <div>{items}</div>
      </div>
    );
  }
}

PeoplesGallery.propTypes = {
  data : PropTypes.array,
  onSearch : PropTypes.func,
  searchText : PropTypes.string,
};

PeoplesGallery.defaultProps = {
  data : [],
  onSearch : null,
  searchText : '',
};

module.exports = PeoplesGallery;
