import React, { Component } from 'react';
import { Link } from 'react-router';
import data from "../../data.js";
import moment from 'moment';
import PeoplePage from '../components/PeoplePage';

class People extends Component {
    constructor(props){
        super(props);
        this.people = data.getPeopleById(this.props.params.id);
    }

    render(){
        return <PeoplePage people = {this.people} />
    }
}

module.exports = People;
