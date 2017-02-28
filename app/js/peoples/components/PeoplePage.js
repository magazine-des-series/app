import React, { Component } from 'react';
import { Link } from 'react-router';
import PeopleHeader from './PeopleHeader';
import AsideItem from '../../common/components/AsideItem';
import { StringUtils } from '../../utils/tools';

class PeoplePage extends Component{
    constructor(props){
        super(props);
    }

    unescapeHTML(escapedHTML) {
        return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
    }

    renderRelatedPeoples(){
        var peoples = this.props.relatedPeoples.map(function(people, i){
            var fullName = StringUtils.slug((people.firstName+" "+people.lastName));
            return (
                    <Link to={ '/peoples/' + people.id + '/' + fullName } key = {"linkTo"+people.id}>
                    <div className="circle-picture small">
                        <img src={ "../../img/portraits/" + people.picture } alt={ people.firstName + " " + people.lastName } />
                        <div className="old-filter"></div>
                    </div>
                    </Link>
                )
        }.bind(this));
        return peoples;
    }

    renderAside(){
        return (
            <div className = "article-aside">
                <AsideItem id="relatedPeoples" title = "Autres acteurs TV">
                    {this.renderRelatedPeoples()}
                </AsideItem>
                <AsideItem id="podcasts" title = "Derniers podcasts" />
            </div>
        )
    }

    renderBiography(){
        if(!this.props.people.biography) return <article className = "article-content"></article>
        return (
            <article className = "article-content">
                <div className = "article-content__title">
                    <h1>PORTRAIT</h1>
                    <p className = "meta">
                        <i className = { "i-calendar"} />
                        <time dateTime="2010-07-03" itemProp="dateCreated">{this.props.people.biography.dateCreated}</time>
                        <span>{" // "}</span>
                        <span itemProp = "author">{this.props.people.biography.author}</span>
                    </p>
                </div>
                <div className = { "article-content__content" } dangerouslySetInnerHTML={{__html: this.unescapeHTML(this.props.people.biography.text)}}/>
            </article>
        )
    }

    render(){
        if(!this.props.people) return <div></div>
        return (
            <div id={ 'people' }>
                <PeopleHeader people = { this.props.people } prev = { this.props.prev } next = { this.props.next }/>
                <div className = "tabs"></div>
                {this.renderBiography()}
                {this.renderAside()}
            </div>
        )
    }
}

module.exports = PeoplePage;
