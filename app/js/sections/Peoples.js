import React, { Component } from 'react';
import PeoplesGallery from '../components/peoples/PeoplesGallery';

class Peoples extends Component {
    constructor(props){
        super(props);
    }

    onSearch(value){
        console.log(value);
    }

    render(){
        if(this.props.params.id) return <div>{this.props.children}</div>
        else return <PeoplesGallery/>
    }
}

module.exports = Peoples;
