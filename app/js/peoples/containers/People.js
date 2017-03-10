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
        this.checkCurrentArticle();
    }

    componentDidUpdate(prevProps){
        if(prevProps.params.id != this.props.params.id){
            this.fetchData();
        }
        this.checkCurrentArticle();
    }

    checkCurrentArticle(){
    /*    if(this.props.current){
            if(this.props.current.articles.length <= this.props.params.article && this.props.art>0){
                browserHistory.replace(this.props.location.pathname);
            }
        }*/
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
                    showArticle = { this.props.showArticle }
                    relatedPeoples = {this.props.relatedPeoples}
                    location = {this.props.location}
                    params = {this.props.params}
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
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(People);
