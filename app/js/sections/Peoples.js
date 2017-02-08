import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchField from '../components/inputs/SearchField'
import { PEOPLES } from "../data.js";

class Peoples extends Component {
    constructor(props){
        super(props);
        console.log(PEOPLES);
    }

    onSearch(value){
        console.log(value);
    }

    render(){
        return (
            <div>
                <div className = { "header-content" } >
                    <h1>Peoples</h1>
                    <h3>
                        Acteurs, scénaristes ou producteurs, ils ont tous bâti à leur façon l’univers des séries d’hier et d’aujourd’hui...
                        <br />
                        Retrouvez ici les plus grands noms du petit écran !
                    </h3>
                    <div className = { "header-content__search-bar" }>
                        <i className = { "i-search"} />
                            <SearchField placeholder = "Rechercher une personnalité" onChange = {this.onSearch.bind(this)} />
                    </div>
                </div>
                <h2><Link to="/peoples/1">People 1</Link></h2>
                <h2><Link to="/peoples/2/5">People 2</Link></h2>
            </div>
        )
    }
}

module.exports = Peoples;
