import React, { Component } from 'react';

class NewsItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <article className = "home-news__item" itemScope itemType="http://schema.org/Article">
                <img itemProp = "image" src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=480%C3%97270&w=480&h=270" />
                <h3 itemProp = "name">L'île fantastique</h3>
                <p className = "meta">
                    <i className = { "i-calendar"} />
                    <time dateTime="2010-07-03" itemProp="dateCreated">3 juillet 2010</time>
                    <span>{" // "}</span>
                    <span itemProp = "author">Thierry le Peut, Christophe Dordain</span>
                </p>
                <p itemProp = "description">{"Mr Roarke est un milliardaire excentrique, propriétaire d'une île au coeur de l'océan Pacifique afin d'y accueillir les touristes et de réaliser leur désir le plus cher. Si la plupart du temps, il s'agit de trouver l'Amour, ces fantasmes sont toutefois variés : problèmes familiaux, d'identité, mal-être, ou encore trouver un certain équilibre, sont des thèmes abordés. "}</p>
                <div className = "readMore"><i className = { "i-play"} />Lire le dossier</div>
        </article>
        )
    }
}

module.exports = NewsItem;
