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

    componentWillReceiveProps(nextProps){
        this.setState({value:nextProps.value});
    }


    normalizeInput() {
        return this.state.value.toLowerCase().trim();
    }

    onChange(e){
        const value = e.target.value;
        if (!value){
           this.props.onChange("");
           return this.setState({value:""});
        }
        this.setState({value:value});
        if(this.props.onChange) this.props.onChange(value);
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
