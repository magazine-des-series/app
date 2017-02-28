import React, {Component} from 'react';

class HalfCircleArrow extends Component{
    renderArrow(){
        return <i className = { "i-chevron-"+this.props.direction } />
    }
    render(){
        return(
            <div className = { "half-circle-arrow "+this.props.direction }>
                <div className = "half">
                    <div className = "circle">{this.renderArrow()}</div>
                </div>
                <div className = "title">{this.props.title}</div>
            </div>
        )
    }
}

HalfCircleArrow.defaultProps = {
    direction : "left",
    title : ""
}

module.exports = HalfCircleArrow;
