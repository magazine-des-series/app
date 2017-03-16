import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../actions/actions';
import PeoplesGallery from '../components/PeoplesGallery';
import Pagination from '../../common/components/Pagination';

class Peoples extends Component {

  static changeURL(page, filter, type = 'replace') {
    const searchQuery = (filter === '') ? '' : `&search=${filter}`;
    const url = `/peoples?page=${page}${searchQuery}`;
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
    if (this.props.filter === '') return Peoples.changeURL(this.props.currentPage, value, 'push');
    return Peoples.changeURL(this.props.currentPage, value, 'replace');
  }

  fetchData() {
    if (this.props.fetchPeoples) this.props.fetchPeoples(this.props.currentPage, this.props.filter);
  }

  changePage(page) {
    Peoples.changeURL(page, this.props.filter, 'push');
  }

  render() {
    return (
      <div>
        <PeoplesGallery
          data = {this.props.visiblePeoples}
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

Peoples.propTypes = {
  currentPage : PropTypes.number,
  lastPage : PropTypes.number,
  visiblePeoples : PropTypes.array,
  filter : PropTypes.string,
  fetchPeoples : PropTypes.func,
};

Peoples.defaultProps = {
  currentPage : 1,
  lastPage : 1,
  filter : '',
  visiblePeoples : [],
  fetchPeoples : null,
};

function mapStateToProps(state) {
  return state.peoples.gallery;
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchPeoples : function fetchPeoples(page, filter) {
      dispatch(actions.fetchPeoples(page, filter));
    },
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
