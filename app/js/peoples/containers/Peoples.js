import React, { Component } from 'react';
import PeoplesGallery from '../components/PeoplesGallery';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Pagination from "../../common/components/Pagination";
import { browserHistory } from 'react-router';

class Peoples extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let page = this.props.currentPage;
        if(this.props.fetchPeoples) this.props.fetchPeoples(page);
    }

    componentWillUpdate(nextProps){
        let page = nextProps.currentPage;
        if(this.props.currentPage != page) this.props.fetchPeoples(page);
    }

    onSearch(value){
        console.log(value);
    }

    changePage(page){
        browserHistory.push("/peoples?page="+page);
    }

    render(){
        return (
            <div>
                <PeoplesGallery data = {this.props.visiblePeoples} />
                <Pagination pageCount = {this.props.lastPage} currentPage = {this.props.currentPage} onClickPage = {this.changePage.bind(this)} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.PeopleReducer
}

function mapDispatchToProps(dispatch) {
    return({
        fetchPeoples:function(page){
            dispatch(actions.fetchPeoples(page));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
