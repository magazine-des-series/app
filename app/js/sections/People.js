import React, { Component } from 'react';
import { Link } from 'react-router'

class People extends Component {
    render(){
        return (
            <div>
                <div className = { "header-content" } >
                    <ul className = { "breadcrumb" }>
                        <li><Link to='/'>{ "Accueil" }</Link></li>
                        <li><Link to='/Peoples'>{ "Portraits" }</Link></li>
                    </ul>
                    <h1>Peoples</h1>
                    <h3>
                        Acteurs, scénaristes ou producteurs, ils ont tous bâti à leur façon l’univers des séries d’hier et d’aujourd’hui...
                        <br />
                        Retrouvez ici les plus grands noms du petit écran !
                    </h3>
                </div>
            </div>
        )
    }
}

module.exports = People;
