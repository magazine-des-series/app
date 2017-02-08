import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render(){
        return (
            <div>
                <h1>{"HOME"}</h1>
                <h2><Link to="/peoples">Link to peoples</Link></h2>
            </div>
        )
    }
}

module.exports = Home;
