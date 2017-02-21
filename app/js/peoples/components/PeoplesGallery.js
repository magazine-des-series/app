import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchField from '../../common/components/inputs/SearchField';
import PeopleItem from './PeopleItem'
import { StringUtils } from '../../utils/tools';
import data from "../../data.js";


class PeoplesGallery extends Component {
    constructor(props){
        super(props);
    }

    onSearch(value){
        console.log(value);
    }

    render(){
        var items = data.getPeoples().map(function(people, i){
            return <PeopleItem key={ "people"+i } user={ people } />
        }.bind(this));
        return (
            <div id={ 'peoples' }>
                <div className = { "header-content" } >
                    <ul className = { "breadcrumb" }>
                        <li><Link to='/'>{ "Accueil" }</Link></li>
                        <li className={ "current" }>Portraits</li>
                    </ul>
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
                <div>{items}</div>
            </div>
        )
    }
}

module.exports = PeoplesGallery;
