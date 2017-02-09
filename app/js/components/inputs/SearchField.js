import React, { Component } from 'react';

const keyCodes = {
    ENTER: 13,
    ESCAPE: 27,
    UP: 38,
    DOWN: 40
};

class SearchField extends Component {

    constructor(props){
        super(props);
        if (!props.onChange){
            throw new Error('You have to assign a callback to "onChange" handler')
        }
        this.state = this.initialState = {
            value : (this.props.value?this.props.value:""),
        }

    }

    normalizeInput() {
        return this.state.value.toLowerCase().trim();
    }

    onChange(e){
        console.log("onChange!");
        const value = e.target.value;
        if (!value) return this.setState(this.initialState);
        this.setState({value:value});
    }

    render(){
        return (
            <input
                className = "search-input"
                type = "text"
                maxLength = "50"
                autoComplete = "off"
                value = { this.state.value }
                placeholder = { this.props.placeholder }
                onChange = { this.onChange.bind(this) }
            />
        )
    }
}

SearchField.propTypes = {
    placeholder : React.PropTypes.string
}

SearchField.defaultProps = {

}

module.exports = SearchField;
