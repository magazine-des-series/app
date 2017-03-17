import React, { Component } from 'react';
import NewsItem from './NewsItem';

class NewsSlider extends Component {
    constructor(props){
        super(props);
        /*this.state = {
            data:[
                {
                    name:"L'île fantastique",
                    image:"https://placeholdit.imgix.net/~text?txtsize=33&txt=480%C3%97270&w=480&h=270",
                    dateCreated:"3 juillet 2010",
                    author:"Thierry le Peut, Christophe Dordain",
                    description:"Mr Roarke est un milliardaire excentrique, propriétaire d'une île au coeur de l'océan Pacifique afin d'y accueillir les touristes et de réaliser leur désir le plus cher. Si la plupart du temps, il s'agit de trouver l'Amour, ces fantasmes sont toutefois variés : problèmes familiaux, d'identité, mal-être, ou encore trouver un certain équilibre, sont des thèmes abordés. ",
                    id:1
                },
                {
                    name:"L'île fantastique 2",
                    image:"https://placeholdit.imgix.net/~text?txtsize=33&txt=480%C3%97270&w=480&h=270",
                    dateCreated:"3 juillet 2010",
                    author:"Thierry le Peut, Christophe Dordain",
                    description:"Mr Roarke est un milliardaire excentrique, propriétaire d'une île au coeur de l'océan Pacifique afin d'y accueillir les touristes et de réaliser leur désir le plus cher. Si la plupart du temps, il s'agit de trouver l'Amour, ces fantasmes sont toutefois variés : problèmes familiaux, d'identité, mal-être, ou encore trouver un certain équilibre, sont des thèmes abordés. ",
                    id:2
                }
            ],
            currentIndex:0
        }*/
    }
    onClickHandler(){
        if(this.props.onClickHandler) this.props.onClickHandler();
        //(this.state.currentIndex==this.state.data.length-1)?this.setState({currentIndex:0}):this.setState({currentIndex:this.state.currentIndex+1});
    }
    render(){
        if(!this.props.items) return <div></div>
        let data = this.props.items[this.props.currentIndex];
        return(
            <div className = "home-news__slider" onClick={this.onClickHandler.bind(this)}>
                <TransitionGroup component="div">
                    <NewsItem key={ "item"+data.id } data={data}/>
                </TransitionGroup>
            </div>
        )
    }
}

module.exports = NewsSlider;
