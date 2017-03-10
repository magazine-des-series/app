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
        let filter = this.props.filter;
        let searchQuery = (filter=="")?"":"&search="+filter;
        if(page > this.props.lastPage) return this.replaceUrl(this.props.lastPage, this.props.filter);
        this.fetchData();
    }

    componentDidUpdate(prevProps){
        if(this.props.currentPage > this.props.lastPage) return this.replaceUrl(this.props.lastPage, this.props.filter);
        if(this.props.currentPage != prevProps.currentPage || this.props.filter != prevProps.filter) this.fetchData();
    }

    fetchData(){
        if(this.props.fetchPeoples) this.props.fetchPeoples(this.props.currentPage, this.props.filter);
    }

    onSearch(value){
        if(this.props.filter == "") this.gotoNewUrl(this.props.currentPage, value);
        else this.replaceUrl(this.props.currentPage, value);

    }

    changePage(page){
        this.gotoNewUrl(page, this.props.filter);
    }

    replaceUrl(page, filter){
        let searchQuery = (filter=="")?"":"&search="+filter;
        let url = "/peoples?page="+page+searchQuery;
        browserHistory.replace(url);
    }

    gotoNewUrl(page, filter){
        let searchQuery = (filter=="")?"":"&search="+filter;
        let url = "/peoples?page="+page+searchQuery;
        browserHistory.push(url);
    }

    render(){
        return (
            <div>
                <PeoplesGallery data = {this.props.visiblePeoples} onSearch = {this.onSearch.bind(this)} searchText = { this.props.filter }/>
                <Pagination pageCount = {this.props.lastPage} currentPage = {this.props.currentPage} onClickPage = {this.changePage.bind(this)} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.peoples.gallery;
}

function mapDispatchToProps(dispatch) {
    return({
        fetchPeoples:function(page, filter){
            dispatch(actions.fetchPeoples(page, filter));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
