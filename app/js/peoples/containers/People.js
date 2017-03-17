import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PeoplePage from '../components/PeoplePage';
import * as actions from '../actions/actions';

class People extends Component {
  constructor(props) {
    super(props);
    this.people = null;
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
    if (this.props.fetchPeople && this.props.params.id) {
      this.props.fetchPeople(this.props.params.id);
    }
    if (this.props.fetchRelatedPeoples && this.props.params.id) {
      this.props.fetchRelatedPeoples(this.props.params.id);
    }
  }

  render() {
    return (
      <PeoplePage
        key = {`people${this.props.current ? this.props.current.id : ''}`}
        people = {this.props.current}
        prev = {this.props.prev}
        next = {this.props.next}
        relatedPeoples = {this.props.relatedPeoples}
        params = {this.props.params}
      />
    );
  }
}

People.propTypes = {
  relatedPeoples : PropTypes.array,
  current : PropTypes.shape({
    id : PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    picture : PropTypes.string,
    jobs : PropTypes.array,
    articles : PropTypes.array,
  }),
  prev : PropTypes.object,
  next : PropTypes.object,
  params : PropTypes.object,
  fetchPeople : PropTypes.func,
  fetchRelatedPeoples : PropTypes.func,
};

People.defaultProps = {
  relatedPeoples : [],
  prev : null,
  next : null,
  current : null,
  params : null,
  fetchPeople : null,
  fetchRelatedPeoples : null,
};

function mapStateToProps(state) {
  return state.peoples.people;
}

function mapDispatchToProps(dispatch) {
  return ({
    fetchPeople : function fetchPeople(id) {
      dispatch(actions.fetchPeople(id));
    },
    fetchRelatedPeoples : function fetchRelatedPeoples(id) {
      dispatch(actions.fetchRelatedPeoples(id));
    },
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
