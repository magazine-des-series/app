import React, { Component } from 'react';
import PeoplesGallery from '../components/PeoplesGallery';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

class Peoples extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(this.props.fetchPeoples) this.props.fetchPeoples();
        console.log(this.props.visiblePeoples);
    }

    onSearch(value){
        console.log(value);
    }

    render(){
        if(this.props.params.id) return <div>{this.props.children}</div>
        else return <PeoplesGallery data = {this.props.visiblePeoples} />
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
