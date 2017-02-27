import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class PeopleHeader extends Component{
    constructor(props){
        super(props);
    }

    renderDates(){
        if(!this.props.people.birthDate) return "";

        if(this.props.people.deathDate){
            let birthDate = moment(new Date(this.props.people.birthDate)).format("YYYY");
            let deathDate = moment(new Date(this.props.people.deathDate)).format("YYYY");
            return <span>{birthDate+" - "+deathDate}</span>
        }
        else{
            let birthDate = moment(new Date(this.props.people.birthDate)).format("LL");
            let age = moment(new Date(this.props.people.birthDate)).fromNow(true);
            return <span>{birthDate+" ("+age+")"}</span>
        }
    }

    render(){
        if(!this.props.people) return <div></div>
        let fullName = this.props.people.firstName + " " + this.props.people.lastName;
        let tagItems = this.props.people.tags.map(function(tag, i){
            return <div key = { "tag"+i } className={ 'tag-label' }>{tag}</div>
        }.bind(this));
        let birthDate = new Date(this.props.people.birthDate);
        return (
                <div className = { "header-content" } >
                    <ul className = { "breadcrumb" }>
                        <li><Link to='/'>{ "Accueil" }</Link></li>
                        <li><Link to='/Peoples'>{ "Portraits" }</Link></li>
                        <li className={ 'current' }>{ fullName }</li>
                    </ul>
                    <div className = { "header-content__content" }>
                        <figure>
                            <div className="circle-picture big">
                                <img src={ "../../img/portraits/" + this.props.people.picture } alt={ fullName } />
                                <div className="old-filter"></div>
                            </div>
                            <figcaption>{this.renderDates()}</figcaption>
                        </figure>
                        <article>
                            <h1>{ fullName }</h1>
                            <h5><div dangerouslySetInnerHTML={{__html: this.props.people.summary}}/></h5>
                            <div className='people__tags'>
                                {tagItems}
                            </div>
                        </article>
                    </div>
                </div>
        )
    }
}

module.exports = PeopleHeader;
