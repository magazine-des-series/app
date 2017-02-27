import React, {Component} from 'react';

class AsideItem extends Component{
    render(){
        return (
            <div className = "aside-item" id = { this.props.id }>
                <div className = "aside-item__title">
                        <div className="ribbon-left" />
                        <div className="ribbon-main">
                            <h4>{this.props.title}</h4>
                        </div>
                        <div className="ribbon-right" />
                </div>
                {this.props.children}
            </div>
        )
    }
}

module.exports = AsideItem;
