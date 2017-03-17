import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ShowPage from '../components/ShowPage';
import * as actions from '../actions/actions';

class Show extends Component {
  constructor(props) {
    super(props);
    this.show = null;
  }

  componentDidMount() {
    this.fetchData(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetchData();
    }
  }

  fetchData() {
    if (this.props.fetchShow && this.props.params.id) {
      this.props.fetchShow(this.props.params.id);
    }
  }

  render() {
    return (
      <ShowPage
        key = {`show${this.props.current ? this.props.current.id : ''}`}
        show = {this.props.current}
        prev = {this.props.prev}
        next = {this.props.next}
        params = {this.props.params}
      />
    );
  }
}

Show.propTypes = {
  current : PropTypes.object,
  prev : PropTypes.object,
  next : PropTypes.object,
  params : PropTypes.object,
  fetchShow : PropTypes.func,
};

Show.defaultProps = {
  prev : null,
  next : null,
  current : null,
  params : null,
  fetchShow : null,
};

function mapStateToProps(state) {
  return state.shows.show;
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchShow : function fetchShow(id) {
      dispatch(actions.fetchShow(id));
    },
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
