import React, { Component } from 'react/addons';
import { Link, browserHistory } from 'react-router';
import PeopleHeader from './PeopleHeader';
import AsideItem from '../../common/components/AsideItem';
import Article from '../../common/components/Article';
import { StringUtils } from '../../utils/tools';

const TransitionGroup = React.addons.TransitionGroup;

class PeoplePage extends Component{
    constructor(props){
        super(props);
    }

    renderRelatedPeoples(){
        var peoples = this.props.relatedPeoples.map(function(people, i){
            var fullName = StringUtils.slug((people.firstName+" "+people.lastName));
            return (
                    <Link to={ '/peoples/' + people.id + '/' + fullName } key = {"linkTo"+people.id}>
                    <div className = "people-mini">
                        <div className="circle-picture small">
                            <img src={ "/img/portraits/" + people.picture } alt={ people.firstName + " " + people.lastName } />
                            <div className="old-filter"></div>
                        </div>
                        <div className = "infoBulle">{ people.firstName + " " + people.lastName }</div>
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
    renderArticle(index){
        if(!index) index = 0;
        if(this.props.people.articles.length <= index){
            return <article className = "article-content"></article>
        }
        let article = this.props.people.articles[index];
        return <Article key = {"article"+index} article = {article} />
    }

    renderTabs(){
        var tabs = this.props.people.articles.map(function(article, i){
            var url = "/peoples/"+this.props.params.id+"/"+this.props.params.fullName;
            var current = (this.props.params.article == i || (!this.props.params.article && i==0));
            if(i>0) url += "/"+i;
            return (
                <Link to={ url } key = {"linkTo"+i}>
                    <div className = {"tab "+(current?"current":"")}>{article.title}</div>
                </Link>
            )
        }.bind(this));
        if(tabs.length>1){
            return (
                <div className = "articles-tabs">
                    {tabs}
                </div>
            )
        }
        return "";
    }

    render(){
        if(!this.props.people) return <div></div>
        return (
            <div id={ 'people' }>
                <PeopleHeader people = { this.props.people } prev = { this.props.prev } next = { this.props.next }/>
                {this.renderTabs()}
                <TransitionGroup component = "div" className = "article-container">
                    {this.renderArticle(this.props.params.article)}
                </TransitionGroup>
                {this.renderAside()}
            </div>
        )
    }
}

module.exports = PeoplePage;
