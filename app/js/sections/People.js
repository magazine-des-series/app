import React, { Component } from 'react';
import { Link } from 'react-router'

class People extends Component {
    render(){
        return (
            <div>
                <h1>{"HOME"}</h1>
                <h2>{this.props.params.id}</h2>
                <h2>{this.props.params.type}</h2>
            </div>
        )
    }
}

module.exports = People;
