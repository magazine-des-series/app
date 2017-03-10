import React, {Component} from 'react';

class HalfCircleArrow extends Component{
    renderArrow(){
        return <i className = { "arrow i-chevron-"+this.props.direction } />
    }
    render(){
        return(
            <div className = { "half-circle-arrow "+this.props.direction }>
                    <div className = "half">
                        <div className = "circle"></div>
                    </div>
                    <div className = "content">
                        <div className = "table">
                            <div className = "cell" >{this.props.children}</div>
                        </div>
                        {this.renderArrow()}
                    </div>

            </div>
        )
    }
}

HalfCircleArrow.defaultProps = {
    direction : "left",
}

module.exports = HalfCircleArrow;
