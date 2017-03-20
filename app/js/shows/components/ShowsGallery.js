import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SearchField from '../../common/components/inputs/SearchField';
import ShowItem from './ShowItem';

class ShowsGallery extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    if (this.props.onSearch) this.props.onSearch(value);
  }

  render() {
    const itemsData = this.props.data;
    const items = itemsData.map(show => (<ShowItem key = {`show${show.id}`} show = {show} />));
    return (
      <div id = "peoples">
        <div className = "header-content">
          <ul className = "breadcrumb">
            <li><Link to = "/">Accueil</Link></li>
            <li className = "current">Séries</li>
          </ul>
          <h1>Séries</h1>
          <h5>
            {'Des années 50 à nos jours, retrouvez toutes vos séries préférées grâce à nos dossiers et nos guides d\'épisodes !'}
          </h5>
          <div className = "header-content__search-bar">
            <i className = "i-search" />
            <SearchField value = {this.props.searchText} placeholder = "Rechercher une série" onChange = {this.onSearch} />
          </div>
        </div>
        <div>{items}</div>
      </div>
    );
  }
}

ShowsGallery.propTypes = {
  data : PropTypes.array,
  onSearch : PropTypes.func,
  searchText : PropTypes.string,
};

ShowsGallery.defaultProps = {
  data : [],
  onSearch : null,
  searchText : '',
};

module.exports = ShowsGallery;
