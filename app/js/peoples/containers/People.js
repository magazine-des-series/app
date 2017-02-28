import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import PeoplePage from '../components/PeoplePage';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import { browserHistory } from 'react-router';

class People extends Component {
    constructor(props){
        super(props);
        this.people = null;

    }

    componentDidMount(){
        this.fetchData(this.props.params.id);
    }

    componentDidUpdate(prevProps){
        if(prevProps.params.id != this.props.params.id){
            this.fetchData();
        }
    }

    fetchData(){
        if(this.props.fetchPeople && this.props.params.id) this.props.fetchPeople(this.props.params.id);
        if(this.props.fetchRelatedPeoples && this.props.params.id) this.props.fetchRelatedPeoples(this.props.params.id);
    }

    render(){
        return <PeoplePage
                    people = { this.props.current }
                    prev={ this.props.prev }
                    next = { this.props.next }
                    relatedPeoples = {this.props.relatedPeoples}
                />
    }
}

function mapStateToProps(state) {
    return state.peoples.people;
}

function mapDispatchToProps(dispatch) {
    return({
        fetchPeople:function(id){
            dispatch(actions.fetchPeople(id));
        },
        fetchRelatedPeoples:function(id){
            dispatch(actions.fetchRelatedPeoples(id));
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
