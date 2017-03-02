import React, { Component } from 'react';
import { Link } from 'react-router';
import { StringUtils } from '../../utils/tools';

class PeopleItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let tags = "";
        for ( let i=0; i < this.props.user.jobs.length; i++ ){
            tags += this.props.user.jobs[i];
            if(i < this.props.user.jobs.length-1) tags += ", ";
        }
        var fullName = StringUtils.slug((this.props.user.firstName+" "+this.props.user.lastName));
        return (
            <div className = "people-item">
                <Link to={ '/peoples/' + this.props.user.id + '/' + fullName }>
                <div className="circle-picture">
                    <img src={ "../../img/portraits/" + this.props.user.picture } alt={ this.props.user.firstName + " " + this.props.user.lastName } />
                    <div className="old-filter"></div>
                </div>
                <div className="tag-label"> { tags } </div>
                <div className = "fullName">
                    <div className = "cell">
                        <h4>
                            {this.props.user.firstName}
                            <span className="lastName">{ " "+this.props.user.lastName }</span>
                        </h4>
                    </div>
                </div>
            </Link>
            </div>
        )
    }
}

module.exports = PeopleItem;
