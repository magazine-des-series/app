import React, { Component } from 'react';
import PeoplesGallery from '../components/PeoplesGallery';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import Pagination from "../../common/components/Pagination";

class Peoples extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let page = 1;
        if(this.props.location.query.page) page = this.props.location.query.page;
        if(this.props.fetchPeoples) this.props.fetchPeoples(page);
    }

    onSearch(value){
        console.log(value);
    }

    render(){
        if(this.props.params.id) return <div>{this.props.children}</div>
        else return (
            <div>
                <PeoplesGallery data = {this.props.visiblePeoples} />
                <Pagination pageCount = {10} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.PeopleReducer;
}

function mapDispatchToProps(dispatch) {
    return({
        fetchPeoples:function(page){
            dispatch(actions.fetchPeoples(page));
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
