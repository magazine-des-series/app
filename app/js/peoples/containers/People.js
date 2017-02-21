import React, { Component } from 'react';
import { Link } from 'react-router';
import data from "../../data.js";
import moment from 'moment';

class People extends Component {
    constructor(props){
        super(props);
        this.people = data.getPeopleById(this.props.params.id);
    }

    renderDates(){
        if(!this.people.birthDate) return "";

        if(this.people.deathDate){
            let birthDate = moment(new Date(this.people.birthDate)).format("YYYY");
            let deathDate = moment(new Date(this.people.deathDate)).format("YYYY");
            return <span>{birthDate+" - "+deathDate}</span>
        }
        else{
            let birthDate = moment(new Date(this.people.birthDate)).format("LL");
            let age = moment(new Date(this.people.birthDate)).fromNow(true);
            return <span>{birthDate+" ("+age+")"}</span>
        }
    }

    render(){
        if(!this.people) return <div></div>
        let fullName = this.people.firstName + " " + this.people.lastName;
        let tagItems = this.people.tags.map(function(tag, i){
            return <div className={ 'tag-label' }>{tag}</div>
        }.bind(this));
        let birthDate = new Date(this.people.birthDate);
        return (
            <div id={ 'people' }>
                <div className = { "header-content" } >
                    <ul className = { "breadcrumb" }>
                        <li><Link to='/'>{ "Accueil" }</Link></li>
                        <li><Link to='/Peoples'>{ "Portraits" }</Link></li>
                        <li className={ 'current' }>{ fullName }</li>
                    </ul>
                    <div className = { "header-content__content" }>
                        <figure>
                            <div className="circle-picture big">
                                <img src={ "../../img/portraits/" + this.people.picture } alt={ fullName } />
                                <div className="old-filter"></div>
                            </div>
                            <figcaption>{this.renderDates()}</figcaption>
                        </figure>
                        <article>
                            <h1>{ fullName }</h1>
                            <h3><div dangerouslySetInnerHTML={{__html: this.people.summary}}/></h3>
                            <div className='people__tags'>
                                {tagItems}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = People;
