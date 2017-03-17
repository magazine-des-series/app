import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../actions/actions';
import ShowsGallery from '../components/ShowsGallery';
import Pagination from '../../common/components/Pagination';

class Shows extends Component {

  static changeURL(page, filter, type = 'replace') {
    const searchQuery = (filter === '') ? '' : `&search=${filter}`;
    const url = `/shows?page=${page}${searchQuery}`;
    if (type === 'replace') {
      return browserHistory.replace(url);
    }
    return browserHistory.push(url);
  }

  componentDidMount() {
    /** BINDINGS **/
    this.onSearch = this.onSearch.bind(this);
    this.changePage = this.changePage.bind(this);

    /** CHECK VALID PAGE NUMBER **/
    const page = this.props.currentPage;
    if (page > this.props.lastPage) return this.changeURL(this.props.lastPage, this.props.filter, 'replace');

    /** FETCH DATAS **/
    return this.fetchData();
  }

  componentDidUpdate(prevProps) {
    /** CHECK VALID PAGE NUMBER **/
    const currentPage = this.props.currentPage;
    const lastPage = this.props.lastPage;
    const filter = this.props.filter;
    if (currentPage > lastPage) {
      return this.replaceUrl(lastPage, filter);
    }
    /** FETCH DATAS iF NECESSARY **/
    if (currentPage !== prevProps.currentPage || filter !== prevProps.filter) {
      return this.fetchData();
    }
    return true;
  }

  onSearch(value) {
    if (this.props.filter === '') return Shows.changeURL(this.props.currentPage, value, 'push');
    return Shows.changeURL(this.props.currentPage, value, 'replace');
  }

  fetchData() {
    if (this.props.fetchShows) this.props.fetchShows(this.props.currentPage, this.props.filter);
  }

  changePage(page) {
    Shows.changeURL(page, this.props.filter, 'push');
  }

  render() {
    return (
      <div>
        <ShowsGallery
          data = {this.props.visibleShows}
          onSearch = {this.onSearch}
          searchText = {this.props.filter}
        />
        <Pagination
          pageCount = {this.props.lastPage}
          currentPage = {this.props.currentPage}
          onClickPage = {this.changePage}
        />
      </div>
    );
  }
}

Shows.propTypes = {
  currentPage : PropTypes.number,
  lastPage : PropTypes.number,
  visibleShows : PropTypes.array,
  filter : PropTypes.string,
  fetchShows : PropTypes.func,
};

Shows.defaultProps = {
  currentPage : 1,
  lastPage : 1,
  filter : '',
  visibleShows : [],
  fetchShows : null,
};

function mapStateToProps(state) {
  return state.shows.gallery;
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchShows : function fetchShows(page, filter) {
      dispatch(actions.fetchShows(page, filter));
    },
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(Shows);
