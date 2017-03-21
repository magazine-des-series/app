import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import SearchField from '../../common/components/inputs/SearchField';
import FilterButton from '../../common/components/buttons/FilterButton';
import ModalContainer from '../../common/containers/ModalContainer';
import ShowItem from './ShowItem';

class ShowsGallery extends Component {

  static getPeriodsList() {
    return ['Années 50', 'Années 60', 'Années 70', 'Années 80'];
  }

  static getTypesList() {
    return ['Aventures', 'Action', 'Comédie', 'Horreur', 'Espionnage'];
  }

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onCloseFilterModal = this.onCloseFilterModal.bind(this);
    this.onClickFilter = this.onClickFilter.bind(this);
    this.onClickFilterButton = this.onClickFilterButton.bind(this);
    this.state = {
      filterOpen : false,
      filters : [],
    };
  }

  onCloseFilterModal() {
    this.setState({ filterOpen : false });
  }

  onSearch(value) {
    if (this.props.onSearch) this.props.onSearch(value);
  }

  onClickFilter(filter) {
    const index = this.state.filters.indexOf(filter);
    let newFilters;
    if (index === -1) {
      newFilters = this.state.filters.concat([filter]);
    } else {
      newFilters = this.state.filters.concat([]);
      newFilters.splice(index, 1);
    }
    return this.setState({ filters : newFilters });
  }

  onClickFilterButton() {
    this.setState({ filterOpen : !this.state.filterOpen });
  }

  renderFiltersModal() {
    const periodFilters = ShowsGallery.getPeriodsList().map(
      filter => <FilterButton label = {filter} className = {this.state.filters.indexOf(filter) === -1 ? '' : 'active'} onClick = {this.onClickFilter} />,
    );
    const typeFilters = ShowsGallery.getTypesList().map(
      filter => <FilterButton label = {filter} className = {this.state.filters.indexOf(filter) === -1 ? '' : 'active'} onClick = {this.onClickFilter} />,
    );
    if (!this.state.filterOpen) return '';
    return (
      <ModalContainer onClose = {this.onCloseFilterModal} contentClass = "filter-modal">
        <h2>Filtrer les résultats :</h2>
        <h3>Période</h3>
        {periodFilters}
        <h3>Genre</h3>
        {typeFilters}
      </ModalContainer>
    );
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
            <div className = "header-content__filter">
              <button role = "button" className = "button-filter" onClick = {this.onClickFilterButton}>
                <i className = "i-bars" />
                <span>Filtrer les résultats</span>
              </button>
            </div>
          </div>
        </div>
        <div>{items}</div>
        {this.renderFiltersModal()}
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
